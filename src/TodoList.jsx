import React from 'react';

export default function TodoList(props) {
	const { todos, onRemove, onComplete } = props;

	const createTodos = () => {
		return todos.map(todo => {
			return (
				<div key={todo.id} id={todo.id} className="todo-list">
					<p>{todo.value}</p>
					<input type="checkbox" onChange={onComplete}></input>
					<button onClick={onRemove}>X</button>
				</div>
			);
		});
	};

	return <>{createTodos()}</>;
}
