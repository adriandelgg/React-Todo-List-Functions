import React, { useState, useEffect } from 'react';
import './App.css';

import TodoList from './TodoList';

function App() {
	const [todos, setTodos] = useState([]);

	const handleNewTodo = event => {
		if (event.key === 'Enter') {
			setTodos(prev => [
				...prev,
				{
					value: event.target.value,
					id: Math.random(),
					completed: false
				}
			]);
		}
	};

	const handleRemoveTodo = ({ target }) => {
		const parentId = Number(target.parentNode.getAttribute('id'));
		setTodos(prev => prev.filter(todo => parentId !== todo.id));
	};

	// Toggles todo complete
	const checkTodo = ({ target }) => {
		const parentId = Number(target.parentNode.getAttribute('id'));
		setTodos(prev =>
			prev.map(todo => {
				if (parentId === todo.id) {
					todo.completed = target.checked;
				}
				return todo;
			})
		);
	};

	const clearCompleted = () => {
		setTodos(prev => prev.filter(todo => !todo.completed));
	};

	return (
		<main className="app">
			<h1>React Todo List</h1>
			<input
				type="text"
				name="createTodo"
				placeholder="Enter a new todo..."
				onKeyPress={handleNewTodo}
			/>
			<button onClick={clearCompleted}>Clear Completed</button>
			<TodoList
				todos={todos}
				onRemove={handleRemoveTodo}
				onComplete={checkTodo}
			/>
		</main>
	);
}

export default App;
