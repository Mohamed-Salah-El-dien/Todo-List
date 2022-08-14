import React from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="todo-header">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
