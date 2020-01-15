
import React, { Component } from 'react'

import { Link } from "react-router-dom"

class LogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            value: '',
            
        }
    }

    setName = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        let name = this.state.value;

        return (
            <form>
                <h1>Log In</h1>
                <div><input placeholder="Username" type="text" value={this.state.value} onChange={this.setName.bind(this)}></input></div>
                <Link onClick={event => {
                    let valid = /^[a-z/d_-\s]{1,12}$/i.test(this.state.value);
                    if(!valid){
                        event.preventDefault();
                    }
                }} to={"/chat/" + name}>
                    <button type="submit">Log In</button>
                </Link>
            </form>
        )
    }
}

export default LogIn






















/*
import React, { Component } from 'react'
import Chat from './Chat'

class LogIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: "",
            value: ""
        }

    }
    
    setName = e => {
        this.setState({
            value: e.target.value
            
        })
    }

    

    getUserName = () => {
        console.log(this.state.username);
    }

    clearInput = e => {
        e.preventDefault();
        this.setState({username: this.state.value, value: ""});
    }

    openChat = () => {
        if (this.state.username.length >= 3) {
            console.log(this.state.username);
            return <Chat username={this.state.username}/>
        } else {
            return null
        }
    }

    render() {
        return (
            <form onSubmit={this.clearInput.bind(this)}>
                <input type="text" value={this.state.value} onChange={this.setName.bind(this)} />
                <button onClick={this.getUserName.bind(this)}>Submit</button>
                {this.openChat()}
            </form>
        )
    }
}

export default LogIn

*/
