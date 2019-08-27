import React from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';


const ToDoList = props => {

    const toDoItems = () => {

        return props.todos.map(item => {

            return <ToDoItem key={item.id} itemId={item.id} completed={item.completed} description={item.description} completeItem={props.completeItem}/>


        })


    }

    return (
        <div className="todolist">
            {toDoItems()}
        </div>
    );



}


export default ToDoList;