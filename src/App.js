// import useReducer
// import reducer hook
import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../src/reducers/todoReducer';

// Components
import AddItemForm from '../src/components/AddItemForm';
import ToDoItemList from '../src/components/ToDoItemList';
import ToDoItem from '../src/components/ToDoItem';

// use helper functions that dispatch actions at App level

function App() {
  const [state, dispatch] = useReducer(todoReducer);

  const handleAdd = {item} => {
    const newItem = {
      item: item,
      completed: false,
      id: Math.random()
    }
    dispatch({type: 'ADD_TODO', payload: newItem})
  }

  const handleComplete = (id) => {
    dispatch({type: 'COMPLETE_TODO', payload: id})
  }

  const handleRemove = () => {
    dispatch({type: 'REMOVE_TODO'})
  }

  console.log(state)


  // add helper functions to rendered components
  return (
    <div className="App">
     <h1>Whoohoo!!! Another Todo List</h1>
     <ToDoItemList state={state.list} handleComplete={handleComplete} />
     <AddItemForm handleAdd={handleAdd} />
     <button onClick={handleRemove}>Clear Completed</button>
    </div>
  );
}

export default App;
