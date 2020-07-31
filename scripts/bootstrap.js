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
  // packages
  // const kbni18nSrc = resolveKibanaPath('packages', 'kbn-i18n');
  // const kbni18nDest = resolvePath('node_modules', '@kbn', 'i18n');
  // createSymlink(kbni18nSrc, kbni18nDest);

  const kbnConfigSchemaSrc = resolveKibanaPath('packages', 'kbn-config-schema');
  const kbnConfigSchemaDest = resolvePath('node_modules', '@kbn', 'config-schema');
  createSymlink(kbnConfigSchemaSrc, kbnConfigSchemaDest);

  // test_utils
  const testUtilsSrc = resolveKibanaPath("x-pack", "test_utils");
  const testUtilsDest = resolvePath('src', 'kibana', "x-pack", "test_utils");
  createSymlink(testUtilsSrc, testUtilsDest);

  // es_ui_shared
  // createPluginSymlink("es_ui_shared");
};

const init = async (pluginId, isXpack = false) => {
  // Copy over the plugin folder
  // await copyFolder(
  //   getKibanaPluginPath(pluginId, isXpack),
  //   getPluginPath(pluginId, isXpack)
  // );

  createSymlinks();
};

// init('snapshot_restore', true);
