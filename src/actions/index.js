export const ADD_EXPENSE = 'ADD_EXPENSE';

export const ADD_CATEGORY = 'ADD_CATEGORY';

export const setAddExpense = (payload) => ({
  type: 'ADD_EXPENSE',
  payload,
});

export const setAddCategory = (payload) => ({
  type: 'ADD_CATEGORY',
  payload,
});
