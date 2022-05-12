import React, {useState, useEffect} from "react";
import TaskFormDetail from "./TaskFormDetail"

function TaskView() {
 
    const [currentTrip, setCurrentTrip] = useState([]);

    function handleClick(e){
        fetch('http://localhost:8000/trips')
            .then(resp => resp.json())
            .then(data => setCurrentTrip(data[data.length-1]))
    }




    return (
        <>
            <TaskFormDetail currentTrip={currentTrip} />
            <button onClick={handleClick}>Show Trip</button>
            <h3>{currentTrip.id}</h3>
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