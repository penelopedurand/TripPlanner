import React, { useState, useEffect } from "react";
import TaskFormDetail from "./TaskFormDetail"

function TaskView({ entryFields }) {

    console.log(entryFields)
    const [currentTrip, setCurrentTrip] = useState([]);

    // function handleClick(e) {
    //     // fetch('http://localhost:8000/trips')
    //     //     .then(resp => resp.json())
    //     //     .then(data => setCurrentTrip(data[data.length - 1]))
    // }

    function handleFormSubmit(addDetails) {
        // let {id, food, transportation, lodging, activities, misc} = addDetails
        fetch('http://localhost:8000/trips')
            .then(resp => resp.json())
            .then(data => setCurrentTrip(data[data.length - 1]))
            .then(fetch(`http://localhost:8000/trips/${currentTrip.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addDetails),
            }))
            .then(setCurrentTrip(addDetails))

    }
    // 

    // food, transportation, lodging, activities, misc


    return (
        <>
            <TaskFormDetail currentTrip={currentTrip} handleFormSubmit={handleFormSubmit} entryFields={entryFields} />
            {/* <button onClick={handleClick}>Show Trip</button> */}
            <br></br>
            <br></br>
            <ul>
                <h2>Name:</h2>
                <li>{currentTrip.name}</li>
                <h2>Food:</h2>
                <li>{currentTrip.food}</li>
                <h2>Transportation:</h2>
                <li>{currentTrip.transportation}</li>
                <h2>Lodging</h2>
                <li>{currentTrip.lodging}</li>
                <h2>Activities:</h2>
                <li>{currentTrip.activities}</li>
                <h2>Misc:</h2>
                <li>{currentTrip.misc}</li>
            </ul>
        </>
    )
}

export default TaskView;