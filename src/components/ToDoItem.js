import React from 'react';

export function ToDoItem(props) {
    
    return (
        <div>
            <h2>ToDo Item</h2>
            <h4 className={props.item.completed ? 'complete' : ''}
                onClick={(e) => {
                    e.preventDefault()
                    props.handleComplete(props.item.id)
                }} > {props.item.todo} </h4>
        </div>
        
    );
};