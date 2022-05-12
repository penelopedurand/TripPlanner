import React, {useState, useEffect} from "react";

function TaskFormDetail ({currentTrip}) {
    const [food, setFood] = useState('')
    const [transportation, setTransportation] = useState('')
    const [lodging, setLodging] = useState('')
    const [activities, setActivities] = useState('')
    const [misc, setMisc] = useState('')
    const [newTaskAs, setNewTaskAs] = useState(currentTrip)

    console.log(newTaskAs)

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
        setNewTaskAs({
            id: currentTrip.id,
            food: food,
            transportation: transportation,
            lodging: lodging,
            activities: activities,
            misc: misc
        })
    }

    // useEffect(() => {
    //     fetch(`http://localhost:8000/trips/${newTrip.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newTaskAs),
    //     })
    //     setFood('')
    //     setTransportation('')
    //     setLodging('')
    //     setActivities('')
    //     setMisc('')
    // }, [newTrip.id, newTaskAs])

    // sendTaskAsToView(newTaskAs);

   
    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="inline fields">
                <input type="text" name="food" placeholder="Shopping List Here" value={food} onChange={handleFoodChange} />
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
