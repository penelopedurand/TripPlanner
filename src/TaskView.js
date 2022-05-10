import React, { useState } from "react";

function TaskView({ formEntry, trips }) {

    // console.log(formEntry)
    // console.log(trips)

    function tripObj(trips) {
        trips.map(trip => {
            if (trip === formEntry.newTrip) {
                return (trip)
            }
        })
    }
    console.log(tripObj)

    return (
        <div>
            <h1>Here are the individual tasks!</h1>
        </div>
    )
}

export default TaskView;