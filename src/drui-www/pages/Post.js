import React from 'react'
import styled from 'styled-components'

class Post extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <pre>
                    {JSON.stringify(this.props)}
                </pre>
            </div>
        )
    }
}

export default Post

