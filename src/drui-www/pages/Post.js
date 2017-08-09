import React from 'react'
import styled from 'styled-components'
import { Menu } from '@dr/drui-menu'
import config from '@dr/drui-config'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 4.769rem;
`

const Post = ({ params, children }) => (
    <Container>
        <Menu menu={config} params={params} />
        {children}
    </Container>
)

export default Post

