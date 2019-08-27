import React from 'react';
import './inputField.css';

const inputField = props => {


    return (
        <div className="inputArea">
            <input value={props.input} className="inputField" type="text" onChange={props.change} placeholder="Add Todo Item"/>
            <button className="submitBtn" onClick={props.submit}>Submit</button>
        </div>
    );
  
}


export default inputField;


