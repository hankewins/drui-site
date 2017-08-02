
export function getPathname() {
    const path = location.pathname.split('/').filter(i => i !== '')
    return (process.env.NODE_ENV !== 'production' && path.indexOf('drui-www')) ?
        path.slice(1) : path
}

export function getSubPath(conf) {
    if (conf.menu && conf.menu.length > 0) {
        if (conf.menu[0].path) {
            return conf.menu[0].path
        }

        for (let item of conf.menu) {
            let result = getSubPath(item)
            if (result && result !== '') {
                return result
            }
        }
    }

    return ''
}
