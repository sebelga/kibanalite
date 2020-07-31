(global as any).window = {};

import { server } from "./server";
import { plugins } from './plugins';
import { getInitializerContext } from './initializer_context'
import { getCore } from '../mocks/core/server';
import { licensing } from '../mocks/plugins/x-pack/licensing/server'
import { security } from '../mocks/plugins/x-pack/security/server'
import { cloud } from '../mocks/plugins/x-pack/cloud/server'

const core = getCore(server);

// Instantiate the plugin we want to work on
const initiatePlugin = async (pluginId: string, isXpack = false) => {
  const { plugin } = (isXpack ? plugins.xPack[pluginId] : plugins.oss[pluginId]) ?? {};
  if (!plugin) {
    throw new Error(`Can't initiate pluggin "${pluginId}". It does not exists.`);
  }

  const initializerContext = getInitializerContext(server);
  const dependencies = {
    licensing,
    security,
    cloud,
  };

  const initiatedPluggin = plugin(initializerContext);
  initiatedPluggin.setup(core, dependencies);
};

// Run the server!
const start = async () => {
  try {
    await server.listen(8000);
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

initiatePlugin('snapshotRestore', true)
start();
