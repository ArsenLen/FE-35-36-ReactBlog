import React from 'react';

const Part = (props) => {
    // props = {part: "Введение...", tasks: 10}
    // props = {part: "Использование React хуков...", tasks: 5}
    return (
        <p>
           Тема: {props.part}
           Количество задач: {props.tasks} 
        </p>
    );
};

export default Part;