import React from 'react';
import './Person.css';


const person = (props) => {
    return (
    <div className='Panel'>
        <p>My name is {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        <button onClick={props.click}>Delete Me</button>
    </div>
    )
}


export default person
