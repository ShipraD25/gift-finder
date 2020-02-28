import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function NavTabs() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Google Books</a>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/" exact={true} className="mr-4 nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/saved" exact={true} className="nav-link">
                        Saved
                    </NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default NavTabs;