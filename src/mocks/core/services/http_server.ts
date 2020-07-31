import {
  FastifyInstance,
  FastifyRequest,
  RouteOptions as FastifyRouteOptions,
} from "fastify";

import createError from "http-errors";
import { Elasticsearch } from "./elasticsearch";

interface RouteOptions {
  path: string;
}

/**
 * Fastify uses the :paramName format to declare a route parameter
 * Kibana router expects parameters to be wrapped like this {paramName}
 * This function takes care of converting the provided path to Fastify format.
 * @param path The path to convert
 */
const parseRoutePath = (path: string) => {
  return path.replace(/({.+?})+/g, `:$1`).replace(/[{,}]/g, "");
};

console.log(parseRoutePath("test/{userName}/{other}"));

class Router {
  private routeHandler: FastifyRouteOptions["handler"] = async (
    request,
    reply
  ) => {
    const handlerResponse = (request.params as any).__handlerResponse__;

    if (handlerResponse.statusCode !== 200) {
      throw createError(
        handlerResponse.statusCode,
        handlerResponse.body.toString()
      );
    }

    return handlerResponse.body;
  };

  constructor(
    private server: FastifyInstance,
    private ctx: { [key: string]: any }
  ) {}

  get({ path }: RouteOptions, handler: any) {
    this.server.route({
      method: "GET",
      url: parseRoutePath(path),
      preHandler: this.getPreRouteHandler(handler),
      handler: this.routeHandler,
    });
  }

  post({ path }: RouteOptions, handler: any) {
    this.server.route({
      method: "POST",
      url: parseRoutePath(path),
      preHandler: this.getPreRouteHandler(handler),
      handler: this.routeHandler,
    });
  }

  getPreRouteHandler(handler: any): FastifyRouteOptions["preHandler"] {
    return async (request, reply, next) => {
      await this.callRequestHandler(request, handler);
      next();
    };
  }

  async callRequestHandler(request: FastifyRequest, handler: any) {
    const handlerResponse: any = {};

    (request.params as any).__handlerResponse__ = handlerResponse;

    const response = {
      ok({ body }: any) {
        handlerResponse.statusCode = 200;
        handlerResponse.body = body;
      },
      internalError({ body }) {
        handlerResponse.statusCode = 500;
        handlerResponse.body = body;
      },
      customError({ body, statusCode }: any) {
        handlerResponse.body = body;
        handlerResponse.statusCode = statusCode;
      },
    };

    return await handler(this.ctx, {}, response);
  }
}

class RouterContext {
  constructor() {}
}

export class Http {
  private ctx: { [key: string]: any };

  constructor(
    private server: FastifyInstance,
    private services: { elasticsearch: Elasticsearch }
  ) {
    this.ctx = {
      core: {
        elasticsearch: {
          legacy: this.services.elasticsearch.legacy.createClient("core"),
        },
      },
    };
  }

  createRouter() {
    return new Router(this.server, this.ctx);
  }

  async registerRouteHandlerContext(contextId: string, handler: any) {
    const context = await handler();
    this.ctx[contextId] = context;
  }
}
