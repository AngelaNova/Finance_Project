import {
  CREATE_INCOME,
  EDIT_INCOME,
  DELETE_INCOME,
} from "../actions/incomesActions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  allIncomes: [
    {
      id: 0,
      amount: 5,
      date: "2024-05-27",
      category: "food",
      description: "coffee",
    },
    {
      id: 1,
      amount: 4,
      date: "2024-05-29",
      category: "food",
      description: "donut",
    },
  ],
};

const incomesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INCOME:
      const newIncome = {
        id: uuidv4(), // Generate a new UUID for each expense
        amount: action.payload.amount,
        date: action.payload.date,
        category: action.payload.category,
        description: action.payload.description,
      };
      return {
        ...state,
        allExpenses: [...state.allExpenses, newIncome],
      };
    case EDIT_INCOME:
      console.log(action);
      return {
        ...state,
        allIncomes: state.allIncomes.map((income) => {
          return income.id === action.payload.id
            ? action.payload.updatedIncome
            : income;
        }),
      };
    case DELETE_INCOME:
      return {
        ...state,
        allIncomes: state.allIncomes.filter(
          (income) => income.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default incomesReducer;
