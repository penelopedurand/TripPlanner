import React, { useState } from "react"

function TripList({ entryFields }) {
    const [trips, setTrips] = useState([])
    const [display, setDisplay] = useState(false)

    // tripDetails ? tripDetails : null

    function handleFetch() {
        fetch('http://localhost:8000/trips')
            .then(resp => resp.json())
            .then(trips => setTrips(trips))
    }

    // const listedDetails = trips.map (trip =>
    // <li>{trip.food}</li>
    // <li></li>)

    function handleTrip(e) {
        setDisplay(!display)
    }

    const individTrips = trips.map(trip =>
        <div>
            <li>
                <button className="showList" onClick={handleTrip}>{trip.name}</button>
            </li>
        </div>
    )

    // const individDetails = trips.map(trip =>
    //    )

    return (
        <>
            <div>
                <button className="buttons" onClick={handleFetch}>Show me my trips!</button>
            </div>
            <ol>
                {individTrips}
                {/* {display ? individDetails : null} */}
            </ol>
        </>

    )
}

export default TripList;