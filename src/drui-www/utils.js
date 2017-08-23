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

function getImageAttr(img) {
    return ['alt', 'src', 'align', 'description', 'data-iserror', 'data-isright']
        .reduce((all, name) => {
            const val = img.getAttribute(name)
            all.push(val)
            return all
        }, [])
}

function renderSingleImg(src, alt, description, isError, isRight) {
    const err = isError && isError === 'true'
    const right = isRight && isRight === 'true'
    return `
        <div class="item">
            <img src="${src}" class="${err ? "error" : ""} ${right ? "right" : ""}" style="width: 100%" />
            <strong>${alt || ''}</strong>
            <p>${description || ''}</p>
        </div>
    `
}

function transformManyImages(dom) {
    const _tmpDiv = document.createElement('div')
    _tmpDiv.innerHTML = dom
    const imgs = Array.from(_tmpDiv.querySelectorAll('img')).map(dom => {
        const [alt, src, align, description, isError, isRight] = getImageAttr(dom)
        return renderSingleImg(src, alt, description, isError, isRight)
    }).join('')

    // TODO: add images
    return `
        <div class="md-image md-images" style="width:66%; float: right;">${imgs}</div>
    `
}

function transformSingleImage(img) {
    // 使浏览器的 html 解析
    const _tmpDiv = document.createElement('div')
    _tmpDiv.innerHTML = img
    const _img = _tmpDiv.querySelector('img')

    if (_img.dataset.many === 'true') {
        return img
    }

    // 获取四个属性
    const [alt, src, align, description, isError, isRight] = getImageAttr(_img)
    const style = 'style="' + (align ? (`float: ${align}; width: 33%"`) : "")
    return `
        <div class="md-image clearfix"${style || ''}">
            ${renderSingleImg(src, alt, description, isError, isRight)}
        </div>
    `
}

/**
 * @param string dom
 * @return string
 */
export function adjustImageLocation(dom) {
    // 非贪婪匹配
    // 顺序很重要
    const result = dom.replace(/<img.*src=".*".*\/?>/g, transformSingleImage)
        .replace(/<div ?hasmanyimage="">([\s\S])*?<\/div>/g, transformManyImages)
    return result
}

