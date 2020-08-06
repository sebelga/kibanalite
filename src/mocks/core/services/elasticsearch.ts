import { Client } from "elasticsearch";

const clientDefaultConfig = () => ({
  host: "localhost:9200",
  log: "trace",
  apiVersion: "master",
  httpAuth: "elastic:changeme",
});

interface InternalClient {
  callAsCurrentUser: (command: string, params?: any) => any;
}

interface LegacyClient {
  client: InternalClient;
  asScoped: () => InternalClient;
}

class LegacyElasticsearh {
  static createClient(id: string, config?: any): LegacyClient {
    const es = new Client(clientDefaultConfig());

    const client: InternalClient = {
      async callAsCurrentUser(api, params) {
        let scope = es;
        const commands = api.split(".");
        const handler = commands.reduce((acc, command, i) => {
          if (acc === undefined) {
            return;
          }
          if (i < commands.length -1){
              scope = acc[command];
          }
          return acc[command];
        }, es as any);

        if (handler === undefined) {
          throw new Error(`[Elasticsearch client] API "${api}" not recognized`);
        }
        
        return handler.call(scope, params);
      },
    };

    const wrappedClient = {
      client,
      asScoped() {
        return client;
      },
    };

    return wrappedClient;
  }
}

export class Elasticsearch {
  public legacy = LegacyElasticsearh;
}
