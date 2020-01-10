import React, { Component } from 'react'
import io from 'socket.io-client'


class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: props.username,
            messages: [],
            
        }
    }

    

    componentDidMount() {
        const socket = io('http://3.120.96.16:3000');
        socket.on('messages', (data) => {
            
        this.setState({
            messages: data
        })
    })
    }

    


    // componentDidUpdate() {
    //     const socket = io('http://3.120.96.16:3000/%27);
    //     socket.on('new_message', (data) => {

    //     this.setState({
    //         updatedMessages: data
    //     })
    // })
    // }

    clg = () => {
        
    }

    render() {
        let messages = this.state.messages.map(message => {
            return <p key={message.id}>{message.username}: {message.content}</p>;
            
        });

        let updatedMsg = () => {
            const socket = io('http://3.120.96.16:3000');


            
            socket.on("new_message", data => {
                
                let x = Object.values(data);
                
                    x.map(newData => {
                        console.log(newData)
                        return <p key={newData.id}>{newData.username}: {newData.content}</p>;
                    })

            })
        }

        return (
            <div className="chat">
                {messages}
                
                {updatedMsg()}

                {/* <h1>new messages</h1>
                {updatedMessages} */}
            </div>
        )
    }
}

export default Chat















/*
import React, { Component } from 'react'
import io from "socket.io-client"


class Chat extends Component {


    render() {
        let username = this.props.username;
        const socket = io("http://3.120.96.16:3000")

        return (
            <div>
                {socket.on('connect', function(){
                    socket.emit("message", {
                    username: username,
                    content: "Hello World",
                })
            })};

            {socket.on('new_message', function(data){
                console.log(data);
            })}
                <p>{username}</p>
            </div>
        )
    }
}

export default Chat

*/
