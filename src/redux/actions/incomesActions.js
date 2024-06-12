export const ADD_INCOME = 'ADD_INCOME';
export const EDIT_INCOME = 'EDIT_INCOME';
export const DELETE_INCOME = 'DELETE_INCOME';
export const CREATE_ID_FOR_INCOME = 'CREATE_ID_FOR_INCOME';

export const addIncome = (income) => ({
  type: ADD_INCOME,
  payload: income,
});

export const editIncome = (id, updatedIncome) => ({
  type: EDIT_INCOME,
  payload: { id, updatedIncome },
});

export const deleteIncome = (id) => ({
  type: DELETE_INCOME,
  payload: id,
});

export const createIdForIncome = (income) => ({
  type: CREATE_ID_FOR_INCOME,
  payload: income,
});
