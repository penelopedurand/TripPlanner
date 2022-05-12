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
        let newEntry = {...pplAssign, [e.target.name]: e.target.value}
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
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="inline fields">
                        <input type="text" name="name" placeholder="Name Your Trip" value={pplAssign.name} onChange={handleChange} />
                        <input type="text" name="food" placeholder="Food" value={pplAssign.food} onChange={handleChange} />
                        <input type="text" name="transportation" placeholder="Transportation" value={pplAssign.transportation} onChange={handleChange} />
                        <input type="text" name="lodging" placeholder="Lodging" value={pplAssign.lodging} onChange={handleChange} />
                        <input type="text" name="activities" placeholder="Activities" value={pplAssign.activities} onChange={handleChange} />
                        <input type="text" name="misc" placeholder="Miscellaneous" value={pplAssign.misc} onChange={handleChange} />
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
