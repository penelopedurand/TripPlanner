import React, {useState, useEffect} from "react";

function TaskFormDetail ({currentTrip, handleFormSubmit, entryFields}) {
    console.log(currentTrip)
    
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
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="inline fields">
                <label>Food:
                <input type="text" name="food" placeholder="Shopping List"value={food} onChange={handleFoodChange} />
                </label>
                <label>Transportation:
                <input type="text" name="transportation" placeholder="Transportation Details" value={transportation} onChange={handleTransChange} />
                </label>
                <label>Lodging:
                <input type="text" name="lodging" placeholder="Lodging Reservations" value={lodging} onChange={handleLodChange} />
                </label>
                <label>Activities:
                <input type="text" name="activities" placeholder="List Activities" value={activities} onChange={handleActChange} />
                </label>
                <label>Miscellaneous:
                <input type="text" name="miscellaneous" placeholder="Additional Trip Plans" value={misc} onChange={handleMiscChange} />
                </label>
            </div>
            <button className="ui button" type="submit">
                Add Your Plans
            </button>
        </form>
    )
}


export default TaskFormDetail;
