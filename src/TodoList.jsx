import React from 'react'

export default function TodoList(props) {
   const createTodos = todo => {
      let todos = props.displayTodos.map(todo => {
         return (
            <div>
               <p>{props.displayTodos}</p>
               <button onClick=""></button>
            </div>
         );
      });
      return todos;
   };
   
   return <>{createTodos()}</>
}
