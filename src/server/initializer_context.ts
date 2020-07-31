import { FastifyInstance } from "fastify";
import { from } from "rxjs";

export const getInitializerContext = (server: FastifyInstance) => {
  const logger = {
    get() {
      return {
        info: server.log.info.bind(server),
      };
    },
  };

  const config = {
    create() {
      const value = {
        enabled: true,
        slm_ui: {
          enabled: true
        }
      };
      return from([value]);
    },
  };

  return {
    config,
    logger,
  };
};
