// src/TodoList.js

import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTodo = () => {
        if (task) {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div id='Todo-app'>
            <h1>Todo List</h1>
            <input id='design'
                type="text"
                placeholder="Add a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button id='dlt' onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
