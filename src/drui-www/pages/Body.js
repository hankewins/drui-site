import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { findContent } from '../utils'

// add markdown style define here
const Body = styled.div`
    display: flex;
    flex: 1;
    background-color: #f8f9fb;
    padding: 5.154rem 7.923rem;

    h1 {
        font-size: 32px;
        color: #333333;
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
        content: '# 加载中...'
    }

    componentDidMount() {
        const { cate, sub } = this.props.params
        const content = findContent(cate, sub)
        this.setState({ content })
    }

    render() {
        return (
            <Body>
                <Markdown source={this.state.content} />
            </Body>
        )
    }

}

export default Content

