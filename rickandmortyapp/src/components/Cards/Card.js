import React from 'react'
import './Card.css'
/* ----------------------------
In this file, we'll build out the JSX of how we want our Cards to LOOK and what props we want to pass into each Card!

Properties we'll use that we can get from the API:
- ID
- Name
- Image
- Status (Alive/Dead)
- Species
- Gender
- Origin
- Last Location

So I built out a basic Card for us to start with. We'll pass in props later.
------------------------------*/

const Card = props => {
    return (
        <div className="card-parent">
            <p className="card-id">ID: </p>
            <h3 className="card-name">Name: </h3>
            <img className="card-image" src="" alt=""/>
            <p className="card-gender">Gender: </p>
            <p className="card-status">Status: </p>
            <p className="card-species">Species: </p>
            <p className="card-origin">Origin: </p>
            <p className="card-last-location">Last Location: </p>
        </div>
    )
}

export default Card;