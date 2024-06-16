import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import ExpenseForm from './components/Expenses/ExpenseForm';
import IncomeForm from './components/Incomes/IncomeForm';
import FinancialSummary from './components/FinancialSummary/FinancialSummary';
import Header from './components/Header';




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <ExpenseForm/>
        <IncomeForm/>
        <FinancialSummary/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
