import React from 'react';

const Statistic = ({text, value}) => {
    return (
        <tr key="text">
            <td>{text} {value} {text==='positive' ? '%' : <></>}</td>
        </tr>
    );
}

export default Statistic;
