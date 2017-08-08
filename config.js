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
            conf.content = require('./posts/' + conf.content)
        }
    }
    return conf
}

const config = convertConfig(configJSON)

for (let i = 0; i < 5; i++) {
    let aMenu = {
        title: faker.random.words(),
        menu: []
    }
    for (let i = 0; i < 7; i++) {
        aMenu.menu.push({
            title: faker.random.words(),
            path: faker.random.word(),
            content: require('./README.md')
        })
    }
    config[1].menu.push(aMenu)
    aMenu = null
}

export default config
