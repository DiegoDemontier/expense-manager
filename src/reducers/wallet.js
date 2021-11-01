import { ADD_EXPENSE, ADD_CATEGORY } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  categories: {
    Renda: false,
    Alimentação: true,
    Lazer: true,
    Trabalho: true,
    Transporte: true,
    Saúde: true,
  },
  /* categories: [
    'Alimentação',
    'Lazer',
    'Trabalho',
    'Transporte',
    'Saúde',
    'Adicionar Categoria',
  ], */
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
