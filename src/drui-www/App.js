import React from 'react'
import { Router, hashHistory } from 'react-router'
import styled from 'styled-components'
import { Header } from '@dr/drui-header'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Home from './pages/Home'
import { getSubPath, prefix } from './utils'
import config from '../../config'
import 'normalize.css'
import './styles/global.css'
import './styles/global.less'
import './styles/fonts/Roboto-Regular.ttf'

const Container = styled.div`
`
const conf = config.map(c => {
    const subPath = getSubPath(c)
    const p = prefix + '/' + c.path + (subPath !== '' ? ('/' + subPath) : '')
    return {
        path: p,
        title: c.title
    }
})
const ContentContainer = styled.main`
`

const Root = ({ children, location, params }) => {
    return (
        <Container>
            <Header
                nav={conf}
                logo={<img src={require('./images/logo.png')} />}
                params={params}
                currentPath={location.pathname}
            />
            <ReactCSSTransitionGroup
                component={ContentContainer}
                transitionName="swap"
                transitionEnterTimeout={350}
                transitionLeaveTimeout={350}
            >
                {React.cloneElement(children || <div />, { key: location.key })}
            </ReactCSSTransitionGroup>
        </Container>
    )
}

const routes = {
    path: '/',
    component: Root,
    indexRoute: { component: Home },
    childRoutes: [
        { path: ':cate/:sub', getComponent(ns, cb) {
            require.ensure([], require => {
                cb(null, require('./pages/Post').default)
            })
        }}
    ]
}

const App = (props) => {
    return (
        <Router history={hashHistory} routes={routes} />
    )
}

export default App

