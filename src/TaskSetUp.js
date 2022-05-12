import React from "react";
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskFormAssign from "./TaskFormAssign"

function TaskSetUp({ trips, addNewTask, passUp }) {
    

    return (
        <>
            <div>
                <Alert key={'warning'} variant={'warning'}>Personalize your experience!</Alert>
            </div>
            <div>
                <TaskFormAssign addNewTask={addNewTask} trips={trips} passUp={passUp} />
            </div>
        </>
    )
}

export default TaskSetUp;
