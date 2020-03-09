import React from "react";

class Login extends Component {

  state = {
    email = "",
    password = ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();

    const newUser = {

      email: this.state.email,
      password: this.state.password

    }

    API.postUser(newUser)
      .then(res => {
        // console.log(res.data)
        res.redirect('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Login Form</h2>
            <form className="login">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email-input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
              </div>
              <button type="submit" className="btn btn-default" onClick={this.handleLogin}>Login</button>
            </form>
            <br />
            <p>Or sign up <a href="/signup">here</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
