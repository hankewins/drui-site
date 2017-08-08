const path = require('path')

module.exports = {
  port: 8000,
  // source: './posts',
  output: './_site',
  theme: 'bisheng-theme-one',
  htmlTemplate: path.join(__dirname, './static/template.html'),
  doraConfig: {},
  webpackConfig(config) {
    return config
  },
  entryName: 'index',
  root: '/'
}
