import createStore from '../createStore'

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

let store = createStore(candyReducer)

export default candyReducer;
