const del = require('del');

const { getKibanaPluginPath, getPluginPath, copyFolder } = require('./utils');

/**
 * Copy and replace the changes made on a pluggin to the Kibana repo.
 * @param {string} pluginId The pluggin code to copy in Kibana
 * @param {boolean} isXpack If the pluggin is x-pack or not
 */
const updateKibana = async (pluginId, isXpack) => {
  const dest = getKibanaPluginPath(pluginId, isXpack);
  const src = getPluginPath(pluginId, isXpack);
  console.log('About to delete', dest);

  // Delete the Kibana pluggin folder
  del.sync([dest], { force: true });

  // Replace it with the changes made on this repo
  copyFolder(src, dest);
}

const ALLOWED_ACTIONS = ['update'];

const action = process.argv.slice(-1)[0];

if (!action || !ALLOWED_ACTIONS.includes(action)) {
    throw new Error(`Wrong action passed.`);
}

const runScript = async () => {
    switch(action) {
        case 'update':
            await updateKibana('snapshot_restore', true);
            break;
        default:
            return;
    }
}


runScript();