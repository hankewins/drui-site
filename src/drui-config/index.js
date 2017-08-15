import configJSON from './menu.json'

function convertConfig(conf) {
    if (Array.isArray(conf)) {
        conf.forEach(item => {
            convertConfig(item)
        })
    } else {
        if (conf.menu) {
            convertConfig(conf.menu)
        }

        if (conf.content) {
            conf.content = require('!lib/dr-file-loader?name=[path][name].[md5:hash:hex:8].html!lib/html-loader!lib/markdown-loader!./posts/' + conf.content)
        }
    }
    return conf
}

const config = convertConfig(configJSON)

export default config
