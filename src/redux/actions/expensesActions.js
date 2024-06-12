export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const FILTER_EXPENSES = 'FILTER_EXPENSES';

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const editExpense = (id, updatedExpense) => ({
  type: EDIT_EXPENSE,
  payload: { id, updatedExpense },
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export const filterExpenses = (category) => ({
  type: FILTER_EXPENSES,
  payload: category,
});
