const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

export const resolveKibanaPath = (...args) => {
  return path.resolve(__dirname, '../..', 'kibana', ...args);
};

export const resolvePath = (...args) => {
  return path.resolve(__dirname, '..', ...args);
}

export const getKibanaPluginPath = (pluginId, isXpack = false) => {
  return resolveKibanaPath(isXpack ? 'x-pack' : 'src', 'plugins', pluginId);
}

export const getPluginPath = (pluginId, isXpack = false) => {
  return resolvePath(isXpack ? 'x-pack' : 'src', 'plugins', pluginId);
}

export const mkdir = (dirpath) => {
  fs.mkdirSync(dirpath, { recursive: true })
} 

export const createSymlink = (from, to) => {
  if (!fs.existsSync(from)) {
    throw new Error(`Can't create symlink to ${from}. Directory does not exists.`)
  }

  if (fs.existsSync(to)) {
    // Symlink already exists, don't go any further
    fs.unlinkSync(to);
  }

  const destPaths = to.split('/');
  const dirDest = destPaths.slice(0, -1).join('/');
  
  // Make sure the dir exists before creating symlink
  mkdir(dirDest);

  // Create symlink
  shell.ln('-s', from, to);
};

export const createPluginSymlink = (pluginId, isXpack = false) => {
  const kibanaPluginPath = getKibanaPluginPath(pluginId, isXpack);
  const pluginPath = getPluginPath(pluginId, isXpack);

  createSymlink(kibanaPluginPath, pluginPath);
}

const createSymlinks = () => {
  // --- Required plugins

  // core
  const coreSrc = resolveKibanaPath('src', 'core');
  const coreDest = resolvePath('src', 'core');
  createSymlink(coreSrc, coreDest);

  // --- Current workspace plugins
  createPluginSymlink('es_ui_shared');
  createPluginSymlink('usage_collection');
  createPluginSymlink('management');
  createPluginSymlink('snapshot_restore', true);
};

// createSymlinks();
