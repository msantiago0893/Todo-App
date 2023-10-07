const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false
}];

const todoReducer = (state = initialState, action = {}) => { // Estructura de un reducer, (= {}) se indica esto cuando no se pasa ningun action

  if (action.type === '[TODO] add todo') {
    // state.push(action.payload); //No deberia hacerse eso, pro que no se deberia mutar el state directamente
    return [...state, action.payload]; //hago la destructuracion del estado, y añado el nuevo elemento del payload
  }

  return state;
}

let todos = todoReducer();   // llamada del reducer

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false
};

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
}
todos = todoReducer(todos, addTodoAction );  // realizando la llamada del reducer y asignarlo a la variable todos


console.log('todos -> ', {state: todos});
