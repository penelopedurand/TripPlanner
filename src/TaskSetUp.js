import React from "react";
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskFormAssign from "./TaskFormAssign"

function TaskSetUp({ trips, addNewTask, passUp }) {


    return (
        <>
            <div className="task-h2">
                <h2>Assign Your Leaders!</h2>
            </div>
            <div>
                <TaskFormAssign addNewTask={addNewTask} trips={trips} passUp={passUp} />
            </div>
        </>
    )
}

export default TaskSetUp;
