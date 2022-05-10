import React, { useState } from "react";
import TaskCard from "./TaskCard";
import TaskView from "./TaskView";

function TaskSetUp({ handleNewEntry }) {
    const [trip, setTrip] = useState({})
    const [travelers, setTravelers] = useState('')
    const [newForm, setNewForm] = useState({})

    function handleTripType(e) {
        setTrip(e.target.value)
    }

    function handleChange(e) {
        setTravelers(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // setNewForm(newForm => newForm = {
        //     newTravelers: travelers,
        //     newTrip: trip
        // })
        handleNewEntry({ travelers, trip })
    }


    return (
        <div>
            <h1>Personalize your experience!</h1>
            <form className="form-to-assign" onSubmit={handleSubmit}>
                <select onChange={handleTripType} value={trip}>
                    <option value="cruise">Cruise</option>
                    <option value="backpacking">Backpacking</option>
                    {/* <option value="meat">Meat</option> */}
                </select>
                <input placeholder="Pick number of travelers" value={travelers} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TaskSetUp;