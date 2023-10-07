import React from 'react'

export const TodoItem = ({todo, onDeleteTodo}) => {
  return (
    <li>
      <span> { todo.description } </span>
      <button onClick={()=> onDeleteTodo(todo.id)}> Borrar </button>
    </li>
  )
}
