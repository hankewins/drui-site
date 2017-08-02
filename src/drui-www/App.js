import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '@dr/drui-header'
import asyncComponent from './asyncComponent'
import { getSubPath } from './utils'
import config from '../../config'
import './styles/normalize.css'
import './styles/global.css'
import './styles/fonts/Roboto-Regular.ttf'

const Container = styled.div`
`
const prefix = process.env.NODE_ENV === 'production' ? '' : '/drui-www'

const Home = asyncComponent('Home', { name: 'Home'})
const Post = asyncComponent('Post', { name: 'Post'})

const conf = config.map(c => {
    const subPath = getSubPath(c)
    const p = prefix + '/' + c.path + (subPath !== '' ? ('/' + subPath) : '')
    return {
        path: p,
        title: c.title
    }
})
const ContentContainer = styled.main`
    margin-top: 4.769rem;
`


const App = (props) => {
    return (
        <BrowserRouter>
            <Container>
                <Header nav={conf} logo={<img src={require('./images/logo.png')} />} />
                <Switch>
                    <Route exact strict path={prefix + '/'} component={Home} />
                    <ContentContainer>
                        <Route strict path={prefix + '/:cate/:sub'} component={Post} />
                    </ContentContainer>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App

