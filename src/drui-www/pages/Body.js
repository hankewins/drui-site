import React from 'react'
import styled from 'styled-components'
import highlight from 'highlight.js'
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

    blockquote {
        background-color: #eee;
        border-left: .4em solid #e4e4e4;
        margin: 1em 0 1em 0;
        padding: .4em .4em;
    }

    table {
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-collapse: collapse;
        border-spacing: 0;

        thead tr:first-child {
            background-color: #f7f7f7;
        }
        tbody tr:nth-child(2n) {
            background-color: #f7f7f7;
        }

        td, th {
            /* padding: .6923rem 1.077rem; */
            padding: .6923rem 4.15rem .6923rem 1.077rem;
            color: #333333;
            border: 0;
            white-space: nowrap;
        }

        thead th {
            font-weight: 500;
            color: #7e848c;
        }
    }

    // 代码块
    pre {
        font-family: "Source Code Pro", "PT Mono", "Ubuntu Mono", "Lucida Console", "Andale Mono", monospace;
        background-color: #f0f0f0;
        margin: 1em 0 1em 0;
        padding: .4em .4em;
        overflow: auto;
        white-space: pre-wrap;
    }
`

class Content extends React.Component {
    state = {
        content: '<h1>加载中...</h1>'
    }

    componentDidMount() {
        const { cate, sub } = this.props.params
        this.loadContent(cate, sub)

        window.addEventListener('click', this.jump)
    }

    // markdown 中可以文章章节可以跳转
    jump = e => {
        const target = e.target
        if (target.tagName.toUpperCase() === 'A') {
            const href = target.getAttribute('href')
            // 过滤掉 react-router 的跳转
            if (href.indexOf('#') === 0 && href.indexOf('#/') === -1) {
                const d = document.querySelector(`[data-id="${decodeURIComponent(href)}"]`)
                if (d) {
                    console.log(d)
                    d.scrollIntoView()
                }
                console.log(`[data-id="${decodeURIComponent(href)}"]`)

                // 没有找到，则说明可能不存在, 先阻止掉
                e.preventDefault()
                return
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.jump)
    }

    componentDidUpdate() {
        Array.from(document.querySelectorAll('pre code') || []).forEach(block => {
            highlight.highlightBlock(block)
        })
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
            <Body
                dangerouslySetInnerHTML={{ __html: this.state.content }}
            />
        )
    }

}

export default Content

