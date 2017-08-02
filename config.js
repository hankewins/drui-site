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
            content: require('./posts/way/idea.md')
        }]
    }]
}, {
    title: '设计规范',
    path: 'guide',
    menu: [{
        title: '设计理念',
        path: 'idea',
        content: require('./posts/way/idea.md')
    }]
}, {
    title: '组件库',
    path: 'repo',
    menu: [{
        title: '设计理念',
        path: 'idea',
        content: require('./posts/way/idea.md')
    }]
}]

export default config
