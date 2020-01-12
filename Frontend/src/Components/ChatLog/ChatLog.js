// Core
import React, { Component } from 'react';
// POC code only
import socketIOClient from "socket.io-client";

// Styles
import styles from './ChatLog.module.css';

const ENDPOINT = 'localhost:3000';
const RANDOM_NAMES = ['federico', 'nahuel', 'lucas', 'mauricio', 'julieta', 'victora', 'victorp', 'jhon', 'gustavo', 'ryan']
class ChatLog extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      socket: socketIOClient(ENDPOINT),
      name: RANDOM_NAMES[Math.floor(Math.random() * 10)]
    }
  }

  componentDidMount() {
    this.state.socket.emit('find', 'message', (error, data) => this.setState({ messages: data.data }));
    this.state.socket.on("message created", (data) => {
        this.setState({ messages: [...this.state.messages, data] })
      });
  }

  handleChange = event => this.setState({text: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.socket.emit('create', 'message', {user: this.state.name, text: this.state.text})
    this.setState({text: ''})
  }

  deleteMessages = () => {
    this.state.messages.forEach(m => {
      this.state.socket.emit('remove', 'message', m._id, () => {
        this.setState({messages: []})
      })
    })
  }

  render = () => {
    return (
      <React.Fragment>
        <div className={styles.chat}>Chat</div>
        <ul>
          {this.state.messages ? this.state.messages.map(m => <li key={m._id}>{`Mensaje de ${m.user}: ${m.text}`}</li>) : null}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} /> 
        </form>
        <button  onClick={this.deleteMessages}>
          Eliminar todos los mensajes
        </button>
      </React.Fragment>
    );
  };
}

export default ChatLog;
