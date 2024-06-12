export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const CREATE_ID_FOR_EXPENSE = 'CREATE_ID_FOR_EXPENSE';

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

export const createIdForExpense = (expense) =>({
  type: CREATE_ID_FOR_EXPENSE,
  payload: expense,
})
