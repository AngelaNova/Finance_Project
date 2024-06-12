import { ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE, FILTER_EXPENSES } from '../actions/expensesActions';

const initialState = {
  allExpenses: [{"id": 0, "amount": 5, "date": "2024-05-27", "category":"food","description":"coffee"},{"id": 1, "amount": 4, "date": "2024-05-29", "category":"food","description":"donut"}],
  filteredExpenses: [],
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        allExpenses: [...state.allExpenses, action.payload],
      };
    case EDIT_EXPENSE:
      console.log(action)
      return {
        ...state,
        allExpenses: state.allExpenses.map((expense) => {
          return(expense.id === action.payload.id ? action.payload.updatedExpense : expense)
        }),
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        allExpenses: state.allExpenses.filter((expense) => expense.id !== action.payload),
      };
    case FILTER_EXPENSES:
      return {
        ...state,
        filteredExpenses: state.allExpenses.filter((expense) => expense.category === action.payload),
      };
    default:
      return state;
  }
};

export default expensesReducer;

