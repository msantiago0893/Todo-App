
export const todoReducer = (initialState = [], action) => {

  switch (action.type) {
    case '[TODO] Add todo':
      return [ ...initialState, action.payload];

    case '[TODO] Delete todo':
      return initialState.filter(item => item.id !== action.payload);

    default:
      return initialState;
  }
}
