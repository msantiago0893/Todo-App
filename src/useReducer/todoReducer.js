
export const todoReducer = (initialState = [], action) => {//se respeta le orden de parametros (state, action)

  switch (action.type) {
    case '[TODO] Add todo':
      return [ ...initialState, action.payload];

    case '[TODO] Delete todo':  //avces mover algo aqu, para que refresque por que pareciera que no funciona
      return initialState.filter(item => item.id !== action.payload);

    default:
      return initialState;
  }
}