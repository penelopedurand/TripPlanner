import React, { useState } from "react";

function TaskFormAssign({ addNewTask }) {
    const [name, setName] = useState('')
    const [food, setFood] = useState('')
    const [transportation, setTransportation] = useState('')
    const [lodging, setLodging] = useState('')
    const [activities, setActivities] = useState('')
    const [misc, setMisc] = useState('')
    const [newTaskAs, setNewTaskAs] = useState({})

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleFoodChange(e) {
        setFood(e.target.value)
    }

    function handleTransChange(e) {
        setTransportation(e.target.value)
    }

    function handleLodChange(e) {
        setLodging(e.target.value)
    }

    function handleActChange(e) {
        setActivities(e.target.value)
    }

    function handleMiscChange(e) {
        setMisc(e.target.value)
    }

    // let newTaskAs = {}


    function handleSubmit(e) {
        e.preventDefault()
        setNewTaskAs({
            name: name,
            food: food,
            transportation: transportation,
            lodging: lodging,
            activities: activities,
            misc: misc
        })
        fetch('http://localhost:8000/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTaskAs),
        })
        setName('')
        setFood('')
        setTransportation('')
        setLodging('')
        setActivities('')
        setMisc('')

    }
    console.log(newTaskAs)
    return (
        <>
            <div className="ui segment">
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="inline fields">
                        <input type="text" name="name" placeholder="Name Your Trip" value={name} onChange={handleNameChange} />
                        <input type="text" name="food" placeholder="Food" value={food} onChange={handleFoodChange} />
                        <input type="text" name="transportation" placeholder="Transportation" value={transportation} onChange={handleTransChange} />
                        <input type="text" name="lodging" placeholder="Lodging" value={lodging} onChange={handleLodChange} />
                        <input type="text" name="activities" placeholder="Activities" value={activities} onChange={handleActChange} />
                        <input type="text" name="miscellaneous" placeholder="Miscellaneous" value={misc} onChange={handleMiscChange} />
                    </div>
                    <button className="ui button" type="submit">
                        Add Task Assignment
                    </button>
                </form>
            </div>
            <div>
                <ul>
                    <li>{newTaskAs.name}</li>
                    <li>{newTaskAs.food}</li>
                    <li>{newTaskAs.transportation}</li>
                    <li>{newTaskAs.lodging}</li>
                    <li>{newTaskAs.activities}</li>
                    <li>{newTaskAs.misc}</li>
                </ul>
            </div>
        </>
    );
}

export default TaskFormAssign;
