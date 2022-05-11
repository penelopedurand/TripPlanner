import React, { useState } from "react";
import TaskCard from "./TaskCard";

function TaskView({ newTrip }) {
    console.log(newTrip)

    // console.log(formEntry)
    //    console.log(trips)

    // let tripObj = trips.map(trip => {
    //     return (
    //         <TaskCard
    //             key={trip.id}
    //             name={trip.name}
    //             food={trip.food}
    //             transportation={trip.transportation}
    //             lodging={trip.lodging}
    //             activities={trip.activities}
    //             misc={trip.misc}
    //         />
    //     )
    // })

    const showTrip = (newTrip) => { 
    if (newTrip !== undefined) {
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
        )}
    }


    return (
        <div>
           {showTrip}
        </div>
    )
}

export default TaskView;