import React, { useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del espiritu',
    done: false
  }
];

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = ( todo ) => {
    console.log('Recogiendo el valor emitido', {todo});

    const action = {
      type: '[TODO] Add todo',
      payload: todo
    }

    dispatch( action );
  }

  const handleDeleteTodo = (id) => {
    console.log('Eliminar ', id);

    const action = {
      type: '[TODO] Delete todo',
      payload: id
    }

    dispatch(action);
  }

  debugger;

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
      <hr />

      <div>
        <h1>Agregar TODO</h1>
        <hr />
        < TodoAdd onNewTodo={ handleNewTodo }/>
      </div>
    </>
  )
}
