import React, { useState } from "react";
import TaskCard from "./TaskCard";

function TaskView({ trips }) {

    // console.log(formEntry)
    //    console.log(trips)

    let tripObj = trips.map(trip => {
        return (
            <TaskCard
                key={trip.id}
                name={trip.name}
                food={trip.food}
                transportation={trip.transportation}
                lodging={trip.lodging}
                activities={trip.activities}
                misc={trip.misc}
            />
        )
    })



    return (
        <div>
            {tripObj}
        </div>
    )
}

export default TaskView;