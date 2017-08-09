import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #439ab4;
    background-image: url(${require('../images/bg.jpg')});
    background-size: cover;
    position: relative;
    top: 0;
    left: 0;
`

const Text = styled.img`
    position: absolute;
    top: 21rem;
    left: 6.385rem;
    width: 37.23rem;
`

const Home = () => {
    return (
        <Background><Text src={require('../images/home-text.png')} alt="ddc"/></Background>
    )
}

export default Home

