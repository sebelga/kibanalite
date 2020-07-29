const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');
const { ncp } = require('ncp');

const copyFolder = promisify(ncp);

const ROOT_DIR = resolve(__dirname, '..');
const KIBANA_DIR = resolve(__dirname, '../..', 'kibana');

const resolveKibanaPath = (...args) => {
  return resolve(KIBANA_DIR, ...args);
};

const resolvePath = (...args) => {
  return resolve(ROOT_DIR, ...args);
}

const getKibanaPluginPath = (pluginId, isXpack = false) => {
  return resolveKibanaPath(isXpack ? 'x-pack' : 'src', 'plugins', pluginId);
}

const getPluginPath = (pluginId, isXpack = false) => {
  return resolvePath('src', 'kibana', isXpack ? 'x-pack' : 'src', 'plugins', pluginId);
}

const mkdir = (dirpath) => {
  fs.mkdirSync(dirpath, { recursive: true })
} 

const createSymlink = (from, to) => {
  if (!fs.existsSync(from)) {
    throw new Error(`Can't create symlink to ${from}. Directory does not exists.`)
  }

  if (fs.existsSync(to)) {
    fs.unlinkSync(to);
  }

  const destPaths = to.split('/');
  const dirDest = destPaths.slice(0, -1).join('/');
  
  // Make sure the dir exists before creating symlink
  mkdir(dirDest);

  // Create symlink
  fs.symlinkSync(from, to);
  // shell.ln('-s', from, to);
};

const createPluginSymlink = (pluginId, isXpack = false) => {
  const kibanaPluginPath = getKibanaPluginPath(pluginId, isXpack);
  const pluginPath = getPluginPath(pluginId, isXpack);

  createSymlink(kibanaPluginPath, pluginPath);
}

const createSymlinks = () => {
  // test_utils
  const testUtilsSrc = resolveKibanaPath('x-pack', 'test_utils');
  const testUtilsDest = resolvePath('x-pack', 'test_utils');
  createSymlink(testUtilsSrc, testUtilsDest);

  // es_ui_shared
  createPluginSymlink('es_ui_shared');
};

const init = async (pluginId, isXpack = false) => {
  const from = getKibanaPluginPath(pluginId, isXpack);
  const to = getPluginPath(pluginId, isXpack);

  if (fs.existsSync(to)) {
    console.warn(`Destination folder "${to}" already exists, copy aborted.`);
  } else {
    await copyFolder(from, to);
  }

  createSymlinks();
}

// init('snapshot_restore', true);
