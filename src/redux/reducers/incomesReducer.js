import { ADD_INCOME, EDIT_INCOME, DELETE_INCOME, CREATE_ID_FOR_INCOME } from '../actions/incomesActions';

const initialState = {
  allIncomes: [{"id": 0, "amount": 5, "date": "2024-05-27", "category":"food","description":"coffee"},{"id": 1, "amount": 4, "date": "2024-05-29", "category":"food","description":"donut"}],
};

const incomesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        allIncomes: [...state.allIncomes, action.payload],
      };
    case EDIT_INCOME:
      console.log(action)
      return {
        ...state,
        allIncomes: state.allIncomes.map((income) => {
          return(income.id === action.payload.id ? action.payload.updatedIncome : income)
        }),
      };
    case DELETE_INCOME:
      return {
        ...state,
        allIncomes: state.allIncomes.filter((income) => income.id !== action.payload),
      };
    case CREATE_ID_FOR_INCOME:
      return {
        //change this TODO
        ...state,
        filteredIncomes: state.allIncomes.filter((income) => income.category === action.payload),
      };
    default:
      return state;
  }
};

export default incomesReducer;

