import { configureStore } from '@reduxjs/toolkit';
import incomeReducer from './reducers/incomesReducer';
import expenseReducer from './reducers/expensesReducer';

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    incomes: incomeReducer,
  },
});

export default store;
