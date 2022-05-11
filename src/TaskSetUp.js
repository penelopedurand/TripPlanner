import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import TaskView from "./TaskView";
 
function TaskSetUp({ handleNewEntry }) {
   const [trip, setTrip] = useState({})
   const [travelers, setTravelers] = useState('')
//    const [showTravelers, setShowTravelers] = useState(null)
//    const [newForm, setNewForm] = useState({})

 
   function handleTripType(e) {
       setTrip(e.target.value)
   }
 
   function handleChange(e) {
       setTravelers(e.target.value)
   }
 
   function handleSubmit(e) {
       e.preventDefault()
       handleNewEntry({travelers, trip})
           //    for (let i = 0; i <= travelers; i++) {
    //     console.log(i)
   }

 
   return (
       <>
        <div>
            <h1>Personalize your experience!</h1>
            <form className="form-to-assign" onSubmit={handleSubmit}>
                <select onChange={handleTripType} value={trip}>
                    <option value="" placeholder="choose"></option>
                    <option value="cruise">Cruise</option>
                    <option value="backpacking">Backpacking</option>
                    {/* <option value="meat">Meat</option> */}
                </select>
                <input placeholder="Pick number of travelers" value={travelers} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div>
            <div>
            {/* {showTravelers} */}
        </div>
     </>
   )
}
 
export default TaskSetUp;
