export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const createExpense = (amount, name, date, category, description) =>({
  type: CREATE_EXPENSE,
  payload: {amount, name, date, category, description},
})

export const editExpense = (id, updatedExpense) => ({
  type: EDIT_EXPENSE,
  payload: { id, updatedExpense },
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});


