import { FastifyInstance } from "fastify";

import { Http } from "./services/http_server";
import { Elasticsearch } from './services/elasticsearch';

export const getCore = (server: FastifyInstance) => {
  const elasticsearch = new Elasticsearch();

  const core = {
    http: new Http(server, { elasticsearch }),
    elasticsearch,
  };

  return {
    ...core,
    getStartServices() {
      return [core];
    },
  };
};
