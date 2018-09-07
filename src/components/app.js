import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Signin from './signin';
import Signup from './signup';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}