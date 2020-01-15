import React, { Component } from 'react'
import io from 'socket.io-client'

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
        const socket = io('http://3.120.96.16:3000')
        socket.on('new_message', (data) => {
            let messages = this.state.newMessages;
            messages.push(data);
            this.setState({newMessages: messages});
        })
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


    render() {
        const { newMessages } = this.state;

        return (
            <form onSubmit={this.sendMessage.bind(this)}>
                {newMessages.map(data => {
                    return <p key={data.id}>{data.username}: {data.content}</p>
                })}
                <input type="text" value={this.state.value} onChange={this.newValue.bind(this)}></input>
                <button type="submit">Send</button>
            </form>
        )
    }
}

export default UpdatedMessages;