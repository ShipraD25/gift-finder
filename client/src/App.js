// import React from "react";
import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Homepage from "./pages/homepage";
import Bookmarks from "./pages/Bookmarks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import API from "./utils/API";
//import {addClass} from "../public/mylib"

class App extends Component {

  state = {
    loggedIn: false
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser = (userObject) => {
    console.log(userObject)
    this.setState(userObject)
  }

  getUser() {
    API.getUser()
    .then(response => {
      if (response.status === 200) {
        this.setState({
          loggedIn: true
        })
      }
    });
  }

  render() {

    return (
      <Router>
        <div>
          <NavTabs updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" render={() =>
            <Login
              updateUser={this.updateUser}
            />} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/bookmarks" component={Bookmarks} />
        </div>
      </Router>
    );
  }
}

export default App;
