import React, { useState } from 'react';

export function AddItemForm (props) {
    const [form, setForm] = useState('')
    
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            props.addTodo(form)
            setForm('')
        }}>
            <input
                name:'task'
                placeholder='Add task'
                value={form}
                onChange={(e) => {
                    setForm(e.target.value)
                }}
            />
            <button type='submit'>Add task</button>
        </form>
    )
};