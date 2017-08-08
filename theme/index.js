const config = {
    lazyLoad: true,
    pick: {
        posts(markdownData) {
            return {
                meta: markdownData.meta,
                description: markdownData.description
            }
        }
    },

    routes: {
        path: '/',
        component: ''
    }
}

module.exports = config
