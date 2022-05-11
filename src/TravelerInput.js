import React from "react";

function TravelerInput({travelerInputs}) {
    const { id } = travelerInputs;
    console.log(id)

    return(
        <div>
            <input id={id} placeholder="traveler name"></input>
        </div>
    )
};

export default TravelerInput;