// YOU WILL BE ADDING PROPERTIES TO THIS FILE.
// NOTICE HOW WE BUILT OUT OUR CARD COMPONENT.
// VISUALIZE TO YOURSELF WHAT ELSE WE NEED FOR OUR CARD COMPONENT PROPERTY WISE

import React from 'react'
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
Remember, we'll need a PROPERTY for each CHARACTER's PROPERTY
ID has been done for you.
------------------------------*/

const Card = props => {
    return (
        <div className="card-parent">
            <p className="card-id">ID: {props.character.id} </p>
            {/*We Still Need These Properties:
            - Name
            - Image
            - Gender
            - Status
            - Species */}
        </div>
    )
}

export default Card;