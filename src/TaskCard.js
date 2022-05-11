import React from "react";
 
function TaskCard({ name, food, transportation, lodging, activities, misc }) {
   // console.log({food})
 
   return(
       <div>
           <h2>{name}</h2>
           <h2>Food</h2>
           <p>{food}</p>
           <h2>Transportation</h2>
           <p>{transportation}</p>
           <h2>Lodging</h2>
           <p>{lodging}</p>
           <h2>Activities</h2>
           <p>{activities}</p>
           <h2>Misc</h2>
           <p>{misc}</p>
       </div>
       )
   };
 
export default TaskCard;

