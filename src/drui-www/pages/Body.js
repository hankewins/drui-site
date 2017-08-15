import React from 'react'
import styled from 'styled-components'
import { findContentURL, adjustImageLocation } from '../utils'

// add markdown style define here
const Body = styled.div`
    background-color: #f8f9fb;
    padding: 5.154rem 7.923rem;

    h1 {
        font-size: 32px;
        color: #333333;
    }

    h1, h2, h3, h4, h5, h6 {
        clear: both;
    }

    h2 {
        font-size: 19px;
        color: #333333;
        margin: 1.385rem 0;
    }

    hr {
        border-top: 1px solid #eaedf2;
        margin: 3.692rem 0;
    }

    p, li {
        font-size: 13px;
        color: #7e848c;
        line-height: 1.5;
    }
`

class Content extends React.Component {
    state = {
        content: '<h1>加载中...</h1>'
    }

    componentDidMount() {
        const { cate, sub } = this.props.params
        const src = findContentURL(cate, sub)
        if (!src) {
            this.loadError()
        }

        fetch(src)
            .then(res => res.text())
            .then(adjustImageLocation)
            .then(content => { this.setState({ content }) })
            .catch(e => {
                console.error(e)
                this.loadError()
            })
    }

    loadError() {
        this.setState({ content: '<h1>暂时还没有内容，敬请期待...</h1>'})
    }

    render() {
        return (
            <Body dangerouslySetInnerHTML={{ __html: this.state.content }} />
        )
    }

}

export default Content

