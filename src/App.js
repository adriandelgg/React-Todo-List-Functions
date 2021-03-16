import React, { useState, useEffect } from 'react';
import './App.css';

import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

function App() {
	const [todo, setTodo] = useState([]);

	const handleNewTodo = event => {
		if (event.key === 'Enter') {
			setTodo(prev => [...prev, event.target.value]);
		}
	};

	return (
		<>
			<h1>React Todo List</h1>
			<input
				type="text"
				name="createTodo"
				placeholder="Enter a new todo..."
				onKeyPress={handleNewTodo}
			/>
			<TodoList displayTodos={todo} />
		</>
	);
}

export default App;
