import faker from 'faker'

faker.locale = 'zh_CN'

const config = [{
    title: '首页',
    path: '',
}, {
    title: '设计指引',
    path: 'way',
    menu: [{
        title: "设计理念与原则",
        menu: [{
            title: '设计理念',
            path: 'idea',
            content: require('./README.md')
        }]
    }]
}, {
    title: '设计规范',
    path: 'guide',
    menu: [{
        title: '设计理念',
        path: 'idea',
        content: require('./README.md')
    }]
}, {
    title: '组件库',
    path: 'repo',
    menu: [{
        title: '设计理念',
        path: 'idea',
        content: require('./README.md')
    }]
}]

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
