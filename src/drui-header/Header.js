import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { wrapperPadding, activeColor } from '@dr/drui-www/styles/variables'

const HeaderWithStyle = styled.header`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${wrapperPadding};
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, .7);
    box-shadow: 0 1px 0 0 #eaedf2;
    position: fixed;
    top: 0;
    left: 0;
`

const NavWithStyle = styled.nav`
    display: flex;

    a {
        text-decoration: none;
        padding: 1.65rem;
        font-size: 16px;
        color: #666666;
    }
`

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    navRender() {
        const activeStyle = { color: activeColor, borderBottom: `2px solid ${activeColor}` }
        return this.props.nav.map((n, i) => (
            <NavLink
                to={n.path}
                key={i}
                activeStyle={activeStyle}
                exact
                strict
            >
                {n.title}
            </NavLink>
        ))
    }

    render() {
        return (
            <HeaderWithStyle>
                <div>{this.props.logo}</div>
                <NavWithStyle>{this.navRender()}</NavWithStyle>
            </HeaderWithStyle>
        )
    }
}

Header.propTypes = {
    logo: PropTypes.element.isRequired,
    nav: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        title: PropTypes.string
    }))
}

export default Header

