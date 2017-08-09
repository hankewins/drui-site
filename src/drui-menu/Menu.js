import React from 'react'
import { IndexLink } from 'react-router'
import styled from 'styled-components'
import { prefix } from '@dr/drui-www/utils'
import { activeColor } from '@dr/drui-www/styles/variables'

const MenuContaienr = styled.div`
    width: 19.23rem;
    background-color: #fff;
    box-shadow: 1px 0 0 0 #eaedf2;
    height: calc(100vh - 4.769rem);
    overflow-y: scroll;
    z-index: 2;
    &::-webkit-scrollbar {
        width: 1rem;
        background-color: #fff;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        width: .8rem;
        background-color: #e4e4e4;
        border-radius: 8px;
    }
`

const MenuSection = styled.div`
    padding: 0 1.846rem;
    h3 {
        font-size: 13px;
        color: #cccccc;
    }

    &:first-child {
        padding-top: 1.380rem;
    }


    &:first-child h3 {
        font-size: 12px;
        color: #333333;
    }

    ul {
        list-style: none;
        padding-left: 2rem;
    }

    ul li {
    }

    ul li a {
        padding: 1.231rem;
        text-decoration: none;
        display: block;
        color: #666666;
        font-size: 13px;
    }
`

const MenuItem = ({ cell, parentPath }) => {
    if (! cell) {
        return null
    }

    const path = parentPath + '/' + cell.path
    return (
        <li>
            <IndexLink
                key={path}
                to={path}
                activeStyle={{ color: activeColor }}
            >
                {cell.title}
            </IndexLink>
        </li>
    )
}

class Menu extends React.PureComponent {
    menuRender() {
        const { menu, params } = this.props
        const rootMenu = menu.find(item => item.path === params.cate)
        if (!rootMenu || !rootMenu.menu) {
            return null
        }

        return rootMenu.menu.map((item, index) => {
            return (
                <MenuSection key={index}>
                    <h3>{item.title}</h3>
                    <ul>
                        {item.menu && item.menu.map((cell, _i) => (
                            <MenuItem cell={cell} parentPath={prefix.replace('/', '') + '/' + rootMenu.path} key={_i} />
                        ))}
                    </ul>
                </MenuSection>
            )
        })
    }

    render() {
        return (
            <MenuContaienr ref={root => this.root = root}>
                {this.menuRender()}
            </MenuContaienr>
        )
    }
}

export default Menu

