import React, { useState, useEffect } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // setLoggedIn(!e.target.value)
        setTimeout(() => {
            setLoggedIn(!e.target.value)
        }, 5000)
        setPassword('')
        setUsername('')
    }


    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }



    return (
        <>
            <h2 className="welcome">Plan Your Next Group Trip!</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-for-login">
                    <label>Username:</label>
                    <input className="not-taskview" type="text" name="username" placeholder="Type Username" value={username} onChange={handleUsernameChange} />
                    <label>Password:</label>
                    <input className="not-taskview" type="text" name="password" placeholder="Type Password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="button-86" value={loggedIn} type="submit">
                    <NavLink to="/tasksetup">{loggedIn ? "Logged In" : "Log In"}</NavLink>
                </button>
            </form>
        </>
    )
}

export default Home;