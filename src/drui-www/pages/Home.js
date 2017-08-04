import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
    height: 900px;
`

const Home = () => {
    return (
        <Img src={require('../images/bg.png')} alt="drui" />
    )
}

export default Home

