import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Homepage from "./pages/homepage";
import Bookmarks from "./pages/Bookmarks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
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

  );
}

export default App;
