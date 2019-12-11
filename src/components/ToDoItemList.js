import React from 'react';
import ToDoItem from './ToDoItem';

export function ToDoItemList(props) {

    return(
        <div>
            {props.state.map((item) => {
                return <ToDoItem item={item.id} handleComplete={props.handleComplete} />
            })}
        </div>
    )
}