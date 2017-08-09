import faker from 'faker'
import configJSON from './menu.json'

faker.locale = 'zh_CN'

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
            conf.content = require('../../posts/' + conf.content)
        }
    }
    return conf
}

const config = convertConfig(configJSON)

export default config
