import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/tasksetup">Task Setup</NavLink>
            <NavLink to="/taskview">Task View</NavLink>
        </div>
    )
}

export default NavBar;