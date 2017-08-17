import React from 'react'
import styled from 'styled-components'
import { findContentURL, adjustImageLocation } from '../utils'

// add markdown style define here
const Body = styled.div`
    background-color: #f8f9fb;
    padding: 5.154rem 7.923rem;
    overflow-y: scroll;
    width: 100%;

    &::-webkit-scrollbar {
        width: .6154rem;
        background-color: #f8f9fb;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        width: .6145rem;
        background-color: #e4e4e4;
        border-radius: 8px;
    }

    h1 {
        font-size: 32px;
        color: #333333;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        clear: both;
    }

    ol {
        padding-left: 1rem;
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
        line-height: 1.8;
        margin: .5rem 0;
    }

    a {
        color: #00bc8d;
        text-decoration: none;
        &:visited {
            color: #00bc8d;
        }
    }
`

class Content extends React.Component {
    state = {
        content: '<h1>加载中...</h1>'
    }

    componentDidMount() {
        const { cate, sub } = this.props.params
        this.loadContent(cate, sub)
    }

    loadContent(cate, sub) {
        const src = findContentURL(cate, sub)
        if (!src) {
            this.loadError()
        }

        fetch(src)
            .then(res => res.text())
            .then(adjustImageLocation)
            // 简单判断一下是否是个完整 html 页面
            .then(data => data.includes('<!DOCTYPE html>') ? Promise.reject(404) : data)
            .then(content => { this.setState({ content }) })
            .catch(e => {
                console.error(e)
                this.loadError()
            })
    }

    componentWillReceiveProps(np) {
        const { cate, sub } = this.props.params
        const { cate: newCate, sub: newSub } = np.params
        if (cate !== newCate || sub !== newSub) {
            this.loadContent(newCate, newSub)
        }
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

