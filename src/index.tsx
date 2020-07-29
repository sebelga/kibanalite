
// Preload specific EUI icons as the dynamically imported icons do not play well with Parcel
// https://github.com/elastic/eui/blob/master/wiki/consuming.md#failing-icon-imports
import './icons';

import { pluggins } from './pluggins';

// Mocks
import { management } from './mocks/plugins/src/management';
import { usageCollection } from './mocks/plugins/src/usage_collection';
import { coreSetup } from './mocks/core';
import { initializerContext } from './mocks/initializer_context';

const initiatePlugin = async (pluginId: string, isXpack = false) => {
  const { plugin } = isXpack ? await pluggins.xPack[pluginId]() : await pluggins.oss[pluginId];
  const initiatedPluggin = plugin(initializerContext);
  initiatedPluggin.setup(coreSetup, { management, usageCollection })
};

initiatePlugin('snapshotRestore', true);
