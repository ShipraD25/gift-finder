import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from "../utils/API";

class Login extends Component {

  state = {
    email: "",
    password: "",
    redirectTo: null
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();

    const credentials = {

      email: this.state.email,
      password: this.state.password

    }

    API.login(credentials)
      .then(res => {
        // window.location.replace('/');
        this.setState({
          redirectTo: '/'
        })
        this.props.updateUser({ loggedIn: true })
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Login Form</h2>
            <form className="login">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email-input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary btn btn-default" onClick={this.handleLogin}>Log In</button>
            </form>
            <br />
            <p>Or sign up <a href="/signup">here</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
