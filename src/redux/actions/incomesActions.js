export const CREATE_INCOME = "CREATE_INCOME";
export const EDIT_INCOME = "EDIT_INCOME";
export const DELETE_INCOME = "DELETE_INCOME";
export const CREATE_ID_FOR_INCOME = "CREATE_ID_FOR_INCOME";

export const createIncome = (amount, date, category, description) => ({
  type: CREATE_INCOME,
  payload: { amount, date, category, description },
});

export const editIncome = (id, updatedIncome) => ({
  type: EDIT_INCOME,
  payload: { id, updatedIncome },
});

export const deleteIncome = (id) => ({
  type: DELETE_INCOME,
  payload: id,
});
