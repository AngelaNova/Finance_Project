import {  CREATE_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from '../actions/expensesActions';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  allExpenses: [{"id": 0, "amount": 5, "date": "2024-05-27", "category":"food","description":"coffee"},{"id": 1, "amount": 4, "date": "2024-05-29", "category":"food","description":"donut"}],
  categories: ["Housing", "Food", "Transportation", "Health", "Debt", "Savings", "Personal Care", "Entertainment", "Education", "Charity", "Other"],
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXPENSE:
      const newExpense = {
        id: uuidv4(), // Generate a new UUID for each expense
        amount: action.payload.amount,
        date: action.payload.date,
        category: action.payload.category,
        description: action.payload.description,
      };
        return{
        ...state,
        allExpenses: [...state.allExpenses, newExpense],
      };
    case EDIT_EXPENSE:
      console.log(action)
      return {
        ...state,
        allExpenses: state.allExpenses.map((expense) => expense.id === action.payload.id ? action.payload.updatedExpense : expense)
        ,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        allExpenses: state.allExpenses.filter((expense) => expense.id !== action.payload),
      };
    default:
      return state;
  }
};

export default expensesReducer;

