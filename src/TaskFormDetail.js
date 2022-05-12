import React, {useState, useEffect} from "react";

function TaskFormDetail ({currentTrip, handleFormSubmit, entryFields}) {
    
    const [food, setFood] = useState(entryFields.food)
    const [transportation, setTransportation] = useState(entryFields.transportation)
    const [lodging, setLodging] = useState(entryFields.lodging)
    const [activities, setActivities] = useState(entryFields.activities)
    const [misc, setMisc] = useState(entryFields.misc)
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

    function handleSubmit (e) {
        e.preventDefault()
        const addDetails = ({
            id: currentTrip.id,
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
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="inline fields">
                <label>Name:
                <input type="text" name="food" value={food} onChange={handleFoodChange} />
                </label>
                <input type="text" name="transportation" placeholder="Transportation Details" value={transportation} onChange={handleTransChange} />
                <input type="text" name="lodging" placeholder="Lodging Reservations" value={lodging} onChange={handleLodChange} />
                <input type="text" name="activities" placeholder="List Activities" value={activities} onChange={handleActChange} />
                <input type="text" name="miscellaneous" placeholder="Additional Trip Plans" value={misc} onChange={handleMiscChange} />
            </div>
            <button className="ui button" type="submit">
                Add Your Plans
            </button>
        </form>
    )
}


export default TaskFormDetail;
