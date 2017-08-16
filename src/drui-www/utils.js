import config from '@dr/drui-config'

export const prefix = ''

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

export function findContentURL(cate, sub) {
    const cateMenu = config.find(item => item.path === cate)
    if (! cateMenu || ! Array.isArray(cateMenu.menu) || cateMenu.menu.length === 0) {
        return null
    }

    const subMenu = findSubMenu(cateMenu.menu, sub)
    if (! subMenu || ! subMenu.content) {
        return null
    }

    return subMenu.content
}

/**
 * @param string dom
 * @return string
 */
export function adjustImageLocation(dom) {
    const result = dom.replace(/<img.*src=".*".*\/?>/g, img => {
        // 获取四个属性
        const alt = getAttr(img, "alt")
        // TODO: lazyload
        const src = getAttr(img, "src")

        let align = getAttr(img, "align")
        align = align === "" ? "" : `float: ${align}`

        const description = getAttr(img, "description")
        let width = getAttr(img, "width")
        width = width === "" ? "" : `width="${width}"`
        let height = getAttr(img, "height")
        height = height === "" ? "" : `height="${height}"`
        return `
            <div class="md-image clearfix" style="${align}">
                <img src="${src}" ${width} ${height} />
                <strong>${alt}</strong>
                <p>${description}</p>
            </div>
        `
    })
    return result
}

function getAttr(src, name) {
    // 非贪婪匹配用 ?
    const result = src.match(new RegExp(name + '="(.+?)"'))
    return result ? result[1] : ""
}
