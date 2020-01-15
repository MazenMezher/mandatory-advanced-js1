import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Links extends Component {
    render() {
        return (
            <>
                <Link to="/"/>
                <Link to="/chat"/>
            </>
        )
    }
}

export default Links;