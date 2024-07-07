import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import IncomeForm from "./components/Incomes/IncomeForm";
import FinancialSummary from "./components/FinancialSummary/FinancialSummary";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/expense-management" element={<ExpenseForm />} />
          <Route path="/income-management" element={<IncomeForm />} />
          <Route path="/financial-summary" element={<FinancialSummary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
