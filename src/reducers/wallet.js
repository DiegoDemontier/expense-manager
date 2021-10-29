import { ADD_EXPENSE, ADD_TAG } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  categories: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde', 'Adicionar Categoria']
}

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state, expenses: action.payload,
      };
    case ADD_TAG:
      return {
        ...state, categories: action.payload,
      }
    default:
      return state;
  }
};

export default walletReducer;
