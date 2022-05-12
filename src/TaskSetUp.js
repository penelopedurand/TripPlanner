import React, { useState, useEffect } from "react";
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskView from "./TaskView";
import TaskFormAssign from "./TaskFormAssign"

function TaskSetUp({ trips, addNewTask , newTrip, sendTaskAsToView}) {
    

    return (
        <>
            <div>
                <Alert key={'warning'} variant={'warning'}>Personalize your experience!</Alert>
            </div>
            <div>
                <TaskFormAssign addNewTask={addNewTask} trips={trips} sendTaskAsToView={sendTaskAsToView}/>
            </div>
            <TaskView newTrip={newTrip}></TaskView>
        </>
    )
}

export default TaskSetUp;
