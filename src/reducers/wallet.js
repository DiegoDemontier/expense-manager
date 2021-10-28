import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  expenses: []
}

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state, expenses: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
