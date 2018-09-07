import React, { Component } from 'react';
import axios from 'axios';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:5000/api/auth',{
        email: this.state.email,
        password: this.state.password
      }).then((result)=>{
        const authToken = result.headers['x-auth-token'];
        console.log(authToken);
        localStorage.setItem('authToken', authToken);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            name="email" 
            onChange={this.handleInputChange.bind(this)} 
            value={this.state.email} 
            className="form-control" 
            id="email" 
            placeholder="Enter email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            onChange={this.handleInputChange.bind(this)} 
            value={this.state.password} 
            className="form-control" 
            id="password" 
            placeholder="Password" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Signin</button>
      </form>
    );
  }
}