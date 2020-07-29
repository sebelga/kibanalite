const { resolve } = require('path');
const cwd = process.cwd();

module.exports = {
  includePaths: [
    resolve(cwd, 'node_modules/@elastic/eui/src/global_styling'),
    resolve(cwd, 'node_modules/@elastic/eui/src/themes/eui'),
    resolve(cwd, 'src', 'style')
  ],
  data: '@import "@elastic/eui/src/themes/eui/eui_globals.scss";'
}