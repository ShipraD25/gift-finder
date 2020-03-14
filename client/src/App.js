// import React from "react";
import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Homepage from "./pages/homepage";
import Bookmarks from "./pages/Bookmarks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
<<<<<<< HEAD
// import MyCarousel from "./components/MyCarousel";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/bookmarks" component={Bookmarks} />
      </div>
      {/* <MyCarousel
        clickToChange
        slidesPerPage={2}
        centered
          >
        <img src="https://www.cozadzien.pl/img/zajawki/_max/1376059845000-mona-lisa-2.jpg" />
        <img src="https://www.cozadzien.pl/img/zajawki/_max/1376059845000-mona-lisa-2.jpg" />
      <img src="https://www.cozadzien.pl/img/zajawki/_max/1376059845000-mona-lisa-2.jpg" />
</MyCarousel> */}
    </Router>
=======
import API from "./utils/API";


class App extends Component {
>>>>>>> 7008ef64754201977abe68895c647d6c6a15d41c

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
