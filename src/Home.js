import React, { useState, useEffect } from "react";
import "./styles.css";
import { NavLink, useHistory } from "react-router-dom";

function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        // setLoggedIn(!e.target.value)
        setTimeout(() => {
            setLoggedIn(!e.target.value)
        }, 5000)
        setPassword('')
        setUsername('')
        history.push("/tasksetup")
    }


    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }



    return (
        <>
            <br></br>
            <br></br>
            <h2 className="welcome">Plan Your Next Group Trip!</h2>
            <br></br>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-for-login">
                    <label>Username:</label>
                    <input className="not-taskview" type="text" name="username" placeholder="Type Username" value={username} onChange={handleUsernameChange} />
                    <br></br>
                    <label>Password:</label>
                    <input className="not-taskview" type="text" name="password" placeholder="Type Password" value={password} onChange={handlePasswordChange} />
                </div>
                <br></br>
                <button className="button-86" value={loggedIn} type="submit">
                    {loggedIn ? "Logged In" : "Log In"}
                </button>
            </form>
        </>
    )
}

export default Home;