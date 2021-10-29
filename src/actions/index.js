export const ADD_EXPENSE = 'ADD_EXPENSE';

export const ADD_TAG = 'ADD_TAG';

export const setAddExpense = (payload) => ({
  type: 'ADD_EXPENSE',
  payload,
});

export const setAddTag = (payload) => ({
  type: 'ADD_TAG',
  payload,
});
