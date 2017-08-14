import React from 'react'
import { IndexLink } from 'react-router'
import styled from 'styled-components'
import { prefix } from '@dr/drui-www/utils'
import { activeColor } from '@dr/drui-www/styles/variables'

const MenuContaienr = styled.div`
    box-shadow: 1px 0 0 0 #eaedf2;
    z-index: 2;
`

const Border = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    width: 21rem;
    background-color: #fff;
    box-shadow: 1px 0 0 0 #eaedf2;
    height: calc(100vh - 4.769rem);
    overflow-y: scroll;
    z-index: 2;
    &::-webkit-scrollbar {
        width: .6154rem;
        background-color: #fff;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        width: .6145rem;
        background-color: #e4e4e4;
        border-radius: 8px;
    }
`

const MenuSection = styled.div`
    padding: 0 1.846rem;
    h3 {
        font-size: 12px;
        color: #cccccc;
        font-weight: 100;
        transform: scale(0.9166666) translateX(-.75rem);
    }

    &:first-child {
        padding-top: 1.380rem;
    }


    &:first-child h3, h3[data-black^=true] {
        font-size: 13px;
        color: #333333;
        font-weight: 500;
        transform: scale(1) translateX(0);
    }

    ul {
        list-style: none;
        padding-left: .3069rem;
    }

    ul li {
    }

    ul li a {
        padding: 1.231rem;
        text-decoration: none;
        display: block;
        color: #666666;
        font-size: 13px;
        &:hover {
            color: ${activeColor};
        }
    }
`

const MenuItem = ({ cell, parentPath }) => {
    if (!cell) {
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

const Block = styled.div`
    display: block;
    height: 1px;
    width: 1px;
`

class Menu extends React.PureComponent {
    menuRender() {
        const { menu, params } = this.props
        const rootMenu = menu.find(item => item.path === params.cate)
        if (!rootMenu || !rootMenu.menu) {
            return null
        }

        return rootMenu.menu.map((item, index) => {
            const hasMenu = item.menu && item.menu.length > 0
            return (
                <MenuSection key={index}>
                    <h3 data-black={item.type === 'black'}>{item.title}</h3>
                    {hasMenu ? (
                        <ul>
                            {item.menu && item.menu.map((cell, _i) => (
                                <MenuItem cell={cell} parentPath={prefix.replace('/', '') + '/' + rootMenu.path} key={_i} />
                            ))}
                        </ul>
                    ) : <Block />}
                </MenuSection>
            )
        })
    }

    render() {
        return (
            <MenuContaienr ref={root => this.root = root}>
              <Border>
                {this.menuRender()}
              </Border>
            </MenuContaienr>
        )
    }
}

export default Menu

