import React from 'react';
import Part from '../Part/Part';

const Content = (props) => {
    //props = { part1: "Введение...", tasks1: 10 }
    return (
        <div>
            <Part part={props.part1} tasks={props.tasks1} /> 
            <Part part={props.part2} tasks={props.tasks2} />
            <Part part={props.part3} tasks={props.tasks3} />
        </div>
    );
};

export default Content;