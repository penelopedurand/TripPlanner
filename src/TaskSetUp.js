import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import TaskView from "./TaskView";
import TravelerInput from "./TravelerInput";
 
function TaskSetUp({ handleNewEntry }) {
   const [trip, setTrip] = useState({})
   const [travelers, setTravelers] = useState('')
   const [showTravelers, setShowTravelers] = useState([])
//    const [newForm, setNewForm] = useState({})

 
   function handleTripType(e) {
       setTrip(e.target.value)
   }
 
   function handleChange(e) {
       setTravelers(e.target.value)
   }

//    let travelerInputs = []
   let textFields = []  
//    [1, 2, 3, 4, 5]
 
   function handleSubmit(e) {
        e.preventDefault()
        handleNewEntry({travelers, trip})
        
        for (let i = 1; i <= travelers; i++) {
            textFields.push(i)
        setShowTravelers(textFields)
        }
   }


   let travelerInputs = showTravelers.map(field => {
    return <TravelerInput key={field.value} id={field.value}/>
    }) 
    
    
 
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
            {travelerInputs}
        </div>
     </>
   )
}
 
export default TaskSetUp;
