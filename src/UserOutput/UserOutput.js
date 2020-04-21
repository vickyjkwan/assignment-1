import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p onClick={props.clicked}>{props.name}'s <img src={props.link} 
                                                            alt="bakery" 
                                                            width="200px"
                                                            height="150px"/>.</p>
            <p>This is a recipe for strawberry short cake.</p>
        </div>
    )
}

export default userOutput;