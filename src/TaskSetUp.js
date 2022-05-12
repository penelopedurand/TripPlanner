import React, { useState, useEffect } from "react";
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskCard from "./TaskCard";
import TaskView from "./TaskView";
import TaskFormAssign from "./TaskFormAssign"

function TaskSetUp({ trips, addNewTask , newTrip, sendTaskAsToView}) {
    



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
        <>
            <div>
                <Alert key={'warning'} variant={'warning'}>Personalize your experience!</Alert>
            </div>
            <div>
                <TaskFormAssign addNewTask={addNewTask} trips={trips} sendTaskAsToView={sendTaskAsToView}/>
                {/* {tripObj} */}
            </div>
            <TaskView newTrip={newTrip}></TaskView>
        </>
    )
}

export default TaskSetUp;
