import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import TaskSetUp from "./TaskSetUp";
import TaskView from "./TaskView";
import NavBar from "./NavBar";


function App() {
    const [trips, setTrips] = useState([])
    const [entryFields, setEntryFields] = useState("")

    useEffect(() => {
        fetch('http://localhost:8000/trips')
            .then(resp => resp.json())
            .then(trips => setTrips(trips))
    }, [])

    function passUp(pplAssign) {
        setEntryFields(pplAssign)
    }


    return (
        <div>
            <NavBar />
            <br></br>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/tasksetup">
                    <TaskSetUp trips={trips} passUp={passUp} />
                </Route>
                <Route exact path="/taskview">
                    <TaskView trips={trips} entryFields={entryFields} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;