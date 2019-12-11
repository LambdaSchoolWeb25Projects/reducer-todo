//  import useState and useReducer
// import reducer hook
import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../src/reducers/todoReducer';

// Components
import AddItemForm from '../src/components/AddItemForm';
import ToDoItemList from '../src/components/ToDoItemList';
import ToDoItem from '../src/components/ToDoItem';

// use helper functions that dispatch actions at App level

function App() {

  return (
    <div className="App">
     <h1>Whoohoo!!! Another Todo List</h1>
    </div>
  );
}

export default App;
