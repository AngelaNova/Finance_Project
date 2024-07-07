import {
  CREATE_INCOME,
  EDIT_INCOME,
  DELETE_INCOME,
} from "../actions/incomesActions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  allIncomes: [
    {
      id: "a376eb46-c302-47e5-9b90-12g0r7gecf79",
      amount: 1000,
      date: "2024-05-27",
      category: "Other",
      description: "salary",
    },
    {
      id: "c2794c5f-f85d-441c-af76-9ko310953d9b",
      amount: 650,
      date: "2024-05-29",
      category: "Housing",
      description: "Rent from tenant",
    },
  ],
  categories: [
    "Housing",
    "Food",
    "Transportation",
    "Health",
    "Debt",
    "Savings",
    "Personal Care",
    "Entertainment",
    "Education",
    "Charity",
    "Other",
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
