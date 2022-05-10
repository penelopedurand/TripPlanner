// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


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
        console.log(obj)
        setFormEntry(obj)

    }

    let filteredTrip = trips.filter(trip => {
        console.log(formEntry.trip)
        if (formEntry.trip !== "") {
            return trip.name.toLowerCase().includes(formEntry.trip.toLowerCase())
        }
        else {
            return trips
        }
        // console.log(formEntry.trip)
    })

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/tasksetup">
                    <TaskSetUp handleNewEntry={handleNewEntry} />
                </Route>
                <Route exact path="/taskview">
                    <TaskView formEntry={formEntry} trips={filteredTrip} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;