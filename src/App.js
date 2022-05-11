import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import TaskSetUp from "./TaskSetUp";
import TaskView from "./TaskView";
import NavBar from "./NavBar";


function App() {
    const [formEntry, setFormEntry] = useState({ travelers: '', trip: '' })
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/trips')
            .then(resp => resp.json())
            .then(trips => setTrips(trips))
    }, [])

    function handleNewEntry(obj) {
        // console.log(obj)
        setFormEntry(obj)

    }


    function addNewTask(obj) {
        setTrips(...trips, obj)
    }


    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/tasksetup">
                    <TaskSetUp handleNewEntry={handleNewEntry} formEntry={formEntry} trips={trips} addNewTask={addNewTask} />
                </Route>
                <Route exact path="/taskview">
                    <TaskView trips={trips} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;