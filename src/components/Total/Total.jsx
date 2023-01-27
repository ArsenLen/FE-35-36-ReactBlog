import React from 'react';

const Total = (props) => {
    return (
        <p>
            Общее Количество задач: {props.total}
        </p>
    );
};

export default Total;