import React from 'react';

const Total = ({course}) => {
    let total = 0;
    course.parts.map(part => total+= part.exercises)

    return (
        <div>
            <b>Number of exercises {total}</b>
        </div>
    );
}

export default Total;
