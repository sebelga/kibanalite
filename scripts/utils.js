const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');
const { ncp } = require('ncp');

const ncpPrimisify = promisify(ncp);

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

const copyFolder = async (from, to) => {
  if (fs.existsSync(to)) {
    console.warn(`Destination folder "${to}" already exists, copy aborted.`);
  } else {
    return await ncpPrimisify(from, to);
  }
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
};

const createPluginSymlink = (pluginId, isXpack = false) => {
  const kibanaPluginPath = getKibanaPluginPath(pluginId, isXpack);
  const pluginPath = getPluginPath(pluginId, isXpack);

  createSymlink(kibanaPluginPath, pluginPath);
}

module.exports = {
  resolveKibanaPath,
  resolvePath,
  getKibanaPluginPath,
  getPluginPath,
  mkdir,
  copyFolder,
  createSymlink,
  createPluginSymlink
}