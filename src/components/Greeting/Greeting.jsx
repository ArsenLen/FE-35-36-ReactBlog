import React from 'react';

const Greeting = (props) => {
    console.log(props) // {name: "Anatoliy", surname: "Chumak"}
    return (
      <div>
        <p>Hello {props.name} {props.surname} {props.age ? (
          <div>
            {props.age}
          </div>
        ) : ""}</p>
      </div>
    )
}

export default Greeting;
// rsc - React Stateless Component