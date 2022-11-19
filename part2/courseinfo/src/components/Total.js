import React from 'react';

const Total = ({course}) => {
    let total = 0;
    course.parts.map(part => total+= part.exercises)
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    );
}

export default Total;
