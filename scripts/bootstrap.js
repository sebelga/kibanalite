const {
  getPluginPath,
  getKibanaPluginPath,
  createSymlink,
  createPluginSymlink,
  copyFolder,
  resolvePath,
  resolveKibanaPath,
} = require("./utils");

const createSymlinks = () => {
  // test_utils
  const testUtilsSrc = resolveKibanaPath("x-pack", "test_utils");
  const testUtilsDest = resolvePath('src', 'kibana', "x-pack", "test_utils");
  createSymlink(testUtilsSrc, testUtilsDest);

  // es_ui_shared
  createPluginSymlink("es_ui_shared");
};

const init = async (pluginId, isXpack = false) => {
  // Copy over the plugin folder
  await copyFolder(
    getKibanaPluginPath(pluginId, isXpack),
    getPluginPath(pluginId, isXpack)
  );

  createSymlinks();
};

// init('snapshot_restore', true);
