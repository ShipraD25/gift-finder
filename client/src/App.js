import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Homepage from "./pages/homepage";
import Bookmarks from "./pages/bookmarks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
    </Router>
  );
}

export default App;
