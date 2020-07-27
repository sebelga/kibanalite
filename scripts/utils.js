const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

export const getKibanaPluginPath = (pluginId, isXpack = true) => {
  return path.resolve(__dirname, '../..', 'kibana', isXpack ? 'x-pack/plugins' : 'src/plugins', pluginId);
}

export const getPluginPath = (pluginId, isXpack = true) => {
  return path.resolve(__dirname, '..', isXpack ? 'x-pack/plugins' : 'src/plugins', pluginId);
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

export const createPluginSymlink = (pluginId, isXpack = true) => {
  const kibanaPluginPath = getKibanaPluginPath(pluginId, isXpack);
  const pluginPath = getPluginPath(pluginId, isXpack);
  createSymlink(kibanaPluginPath, pluginPath);
}

const createSymlinks = () => {
  // Symlink to Core
  const coreSrc = path.resolve(__dirname, '../..', 'kibana', 'src', 'core');
  const coreDest = path.resolve(__dirname, '..', 'src', 'core');
  createSymlink(coreSrc, coreDest);

  createPluginSymlink('es_ui_shared', false);
  createPluginSymlink('snapshot_restore');
};

// createSymlinks();
