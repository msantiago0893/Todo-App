import React from 'react'
import { useForm } from '../customHooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

  const {
    description,
    onInputChange,
    onResetForm
   } = useForm({
    description: ''
  });


  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    }

    onNewTodo(newTodo); //Emitir un valor al padre
    onResetForm();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name='description'
        placeholder='¿Que hay que hacer?'
        value={description}
        onChange={ onInputChange } />

      <button type="submit"> Agregar</button>
    </form>
  )
}
