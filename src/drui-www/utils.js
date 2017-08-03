import config from '../../config'

export const prefix = process.env.NODE_ENV === 'production' ? '' : '/drui-www'

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

const noContentTip = '# 暂时还没有内容，敬请期待...'

function findSubMenu(menu, sub) {
    for (let item of menu) {
        if (item.menu) {
            const subMenu = findSubMenu(item.menu, sub)
            if (subMenu) {
                return subMenu
            }
        }
        if (item.path === sub) {
            return item
        }
    }
}

export function findContent(cate, sub) {
    const cateMenu = config.find(item => item.path === cate)
    if (! cateMenu || ! Array.isArray(cateMenu.menu) || cateMenu.menu.length === 0) {
        return noContentTip
    }

    const subMenu = findSubMenu(cateMenu.menu, sub)
    if (! subMenu || ! subMenu.content) {
        return noContentTip
    }

    return subMenu.content

}

