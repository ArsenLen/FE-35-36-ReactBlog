import React from 'react';

const Header = (props) => {
    // props = { course: "Frontend Pro" }
    return (
        <h1>
            {props.course} 
        </h1>
    );
};

export default Header;