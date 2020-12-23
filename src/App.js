import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/ToDoList'
function App() {
  
  return (
    <div className="App">
      <header>
      <h1>Akash's ToDo List</h1>
      
      </header>
      <Form/>
      <TodoList />
    </div>
  );
}

export default App;
