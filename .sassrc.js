const path = require('path');
const cwd = process.cwd();

module.exports = {
  includePaths: [
    path.resolve(cwd, 'node_modules/@elastic/eui/src/global_styling'),
    path.resolve(cwd, 'node_modules/@elastic/eui/src/themes/eui'),
    path.resolve(cwd, 'src', 'style')
  ],
  data: '@import "@elastic/eui/src/themes/eui/eui_globals.scss";'
}