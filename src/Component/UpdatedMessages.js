import React, { Component } from 'react'
import io from 'socket.io-client'
import {emojify} from "react-emojione"
import Linkify from "react-linkify"
import {Link} from "react-router-dom"

class UpdatedMessages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newMessages: [],
            username: props.username,
            value: "",
            text: '',
            clearValue: "",
        }
    }

    newValue = e => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidMount() {
        
        this.props.socket.on('new_message', (data) => {
            let messages = this.state.newMessages;
            messages.push(data);
            this.setState({newMessages: messages});
        })
    }

    componentWillUnmount() {
        this.props.socket.off("new_message");
    }
    sendMessage = (e) => {
        e.preventDefault()
        this.setState({clearValue: this.state.value, value: ""})
        const socket = io('http://3.120.96.16:3000')
        socket.emit("message", {
            username: this.props.username,
            content: this.state.value,
        })
    }

    x = (e) => {
        if (this.state.value.length >= 1 && this.state.value.length <= 200){
            return true
        } else {
            alert("Keep input length over 1 and under 201")
            e.preventDefault()
        }
    }

    render() {
        const { newMessages } = this.state;

        return (
            <form onSubmit={this.sendMessage.bind(this)}>
                {newMessages.map(data => {
                    return <p key={data.id}>{data.username}: <Linkify>{emojify(data.content)} </Linkify></p>
                })}
                <input type="text" value={this.state.value} onChange={this.newValue.bind(this)}></input>
                <button onClick={this.x.bind(this)} type="submit">Send</button>
                <Link to="/">
                    <button>Return to login</button>
                </Link>
            </form>
        )
    }
}

export default UpdatedMessages;