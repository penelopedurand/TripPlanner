import React from "react";

function TaskView({ newTrip }) {
    console.log('new trip', newTrip)
    console.log(Boolean(newTrip))


    return (
        <ul>
            <h2>Name:</h2>
            <li>{newTrip.name}</li>
            <h2>Food:</h2>
            <li>{newTrip.food}</li>
            <h2>Transportation:</h2>
            <li>{newTrip.transportation}</li>
            <h2>Lodging</h2>
            <li>{newTrip.lodging}</li>
            <h2>Activities:</h2>
            <li>{newTrip.activities}</li>
            <h2>Misc:</h2>
            <li>{newTrip.misc}</li>
        </ul> 
    )
}

export default TaskView;