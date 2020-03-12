import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavTabs(props) {

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            {/* <Link to="/"> <img src="#" width="50" height="50" alt="logo" id="logo" /></Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-right" id="navbarNavDropdown">
                <ul className="nav nav-pills navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link topic">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/bookmarks" className="nav-link topic">
                            Bookmarks
                        </Link>
                    </li>
                </ul>

                <ul className="nav nav-pills navbar-nav ml-auto">
                    {props.loggedIn ? (
                        <section>
                            <li className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Logout</span></Link>
                            </li>
                        </section>) : (
                            <section>
                                <li className="nav-item active">
                                    <Link to="/signup" className="nav-link topic">
                                        Sign Up
                        </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/login" className="nav-link topic">
                                        Login
                        </Link>
                                </li>
                            </section>
                        )}
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;