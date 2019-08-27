import React from 'react';
import './ToDoItem.css';

const ToDoItem = props => {

    let style;

    if(props.completed === true){

        style = {
            textDecoration : 'line-through'
        }
    } else {

        style = {
            textDecoration : 'none'
        }

    }


    return (
        <div className="todoitem" style={style}>
            <label><input type="checkbox" onClick={props.completeItem.bind(null, props.itemId)} />{props.description}</label>
        </div>
    );

}


export default ToDoItem;