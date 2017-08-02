import React from 'react'

export default (mod, collection) => (
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props)

            this.Component = null
            this.state = { Component: AsyncComponent.Component }
        }

        componentWillMount() {
            if (!this.state.Component) {
                require.ensure([], require => {
                    const Component = require('./pages/' + mod).default
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }

        render() {
            if (this.state.Component) {
                return (
                    <this.state.Component { ...this.props } { ...collection } />
                )
            }

            return null
        }
    }
)
