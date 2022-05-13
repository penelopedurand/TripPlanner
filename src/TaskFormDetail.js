import React, { useState, useEffect } from "react";

function TaskFormDetail({ currentTrip, handleFormSubmit, entryFields }) {
    console.log(currentTrip)

    const [food, setFood] = useState(entryFields.food ? entryFields.food + ':' : "")
    const [transportation, setTransportation] = useState(entryFields.transportation ? entryFields.transportation + ":" : "")
    const [lodging, setLodging] = useState(entryFields.lodging ? entryFields.lodging + ":" : "")
    const [activities, setActivities] = useState(entryFields.activities ? entryFields.activities + ":" : "")
    const [misc, setMisc] = useState(entryFields.misc ? entryFields.misc + ":" : "")
    const [newTaskAs, setNewTaskAs] = useState(currentTrip)

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

    function handleSubmit(e) {
        e.preventDefault()
        const addDetails = ({
            id: currentTrip.id,
            name: currentTrip.name,
            food: food,
            transportation: transportation,
            lodging: lodging,
            activities: activities,
            misc: misc
        })
        setNewTaskAs(addDetails)
        handleFormSubmit(addDetails)
    }



    return (
        <>
            <h2 className="task-h2">Personalize Your Experience!</h2>
            <br></br>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inline-fields-assign">
                    <label>Food:</label>
                    <input className="taskview-input" type="text" name="food" placeholder="Shopping List" value={food} onChange={handleFoodChange} />

                    <label>Transportation:</label>
                    <input className="taskview-input" type="text" name="transportation" placeholder="Transportation Details" value={transportation} onChange={handleTransChange} />


                    <label>Lodging:</label>
                    <input className="taskview-input" type="text" name="lodging" placeholder="Lodging Reservations" value={lodging} onChange={handleLodChange} />


                    <label>Activities:</label>
                    <input className="taskview-input" type="text" name="activities" placeholder="List Activities" value={activities} onChange={handleActChange} />


                    <label>Miscellaneous:</label>
                    <input className="taskview-input" type="text" name="miscellaneous" placeholder="Additional Trip Plans" value={misc} onChange={handleMiscChange} />


                </div>
                <br></br>
                <button className="buttons" type="submit">
                    Add Your Plans
                </button>
            </form >
        </>
    )
}


export default TaskFormDetail;
