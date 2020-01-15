import React, { Component } from 'react'
import io from 'socket.io-client'
import UpdatedMessages from './UpdatedMessages';
import Linkify from "react-linkify"
import {emojify} from "react-emojione"

class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: props.username,
            messages: [],
            convertUrl: []
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


    //     this.state.messages.map(msg => {
    //         // let word = msg.content.split(" ");
    //         return console.log('hej');
    //         // if (/^https?/ig.test(word)) {
    //         //         return <a href={word}>{word}</a>
    //         //     }
    //         //     return <> {word} </>;
    //     })

    //     console.log('object');
    // }



    render() {
        const { username, messages } = this.state;

        // let url = messages.map(msg => {
        //     let word = msg.content.split(" ");
        //     if (/^https?/ig.test(word)) {
        //             return <a href={word}>{word}</a>
        //         }
        //         return <> {word} </>;
        // })

        let msg = messages.map(message => {

            return <p key={message.id}>{message.username}: <Linkify> {emojify (message.content)} </Linkify></p>;
            // return <p key={message.id}>{message.username}: {replace_content(message.content)}</p>;
        })

        return (
            <div>
                {/* {x} /}
                
                {/ {replace_content()} */}
                {msg}
                <UpdatedMessages username={username}/>
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
