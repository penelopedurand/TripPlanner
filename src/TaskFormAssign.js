import React, { useState, useEffect } from "react";
import uuid from 'react-uuid';

function TaskFormAssign({ addNewTask, passUp }) {

    const [pplAssign, setPplAssign] = useState({
        "id": uuid,
        "name": "",
        "food": "",
        "transportation": "",
        "lodging": "",
        "activities": "",
        "misc": ""
    });

    const [newTaskAs, setNewTaskAs] = useState({})


    function handleChange(e) {
        let newEntry = { ...pplAssign, [e.target.name]: e.target.value }
        setPplAssign(newEntry)
    };

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:8000/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pplAssign),
        })

        setNewTaskAs(pplAssign)
        passUp(pplAssign)
    }


    return (
        <>
            <div className="ui segment">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inline fields">
                        <input className="not-taskview" type="text" name="name" placeholder="Name Your Trip" value={pplAssign.name} onChange={handleChange} />
                        <input className="not-taskview" type="text" name="food" placeholder="Food Boss" value={pplAssign.food} onChange={handleChange} />
                        <input className="not-taskview" type="text" name="transportation" placeholder="Transportation Chief" value={pplAssign.transportation} onChange={handleChange} />
                        <input className="not-taskview" type="text" name="lodging" placeholder="Lodging Director" value={pplAssign.lodging} onChange={handleChange} />
                        <input className="not-taskview" type="text" name="activities" placeholder="Activities Mascot" value={pplAssign.activities} onChange={handleChange} />
                        <input className="not-taskview" type="text" name="misc" placeholder="Miscellaneous Manager" value={pplAssign.misc} onChange={handleChange} />
                    </div>
                    <button className="ui button" type="submit">
                        Add Task Assignment
                    </button>
                </form>
            </div>
            <div>
                <ul>
                    <h2>Name:</h2>
                    <li>{newTaskAs.name}</li>
                    <h2>Food:</h2>
                    <li>{newTaskAs.food}</li>
                    <h2>Transportation:</h2>
                    <li>{newTaskAs.transportation}</li>
                    <h2>Lodging</h2>
                    <li>{newTaskAs.lodging}</li>
                    <h2>Activities:</h2>
                    <li>{newTaskAs.activities}</li>
                    <h2>Misc:</h2>
                    <li>{newTaskAs.misc}</li>
                </ul>
            </div>
        </>
    );
}

export default TaskFormAssign;
