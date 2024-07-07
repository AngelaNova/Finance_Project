import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Header from "../Header";

const FinancialSummary = () => {
  const [totalForMonthExp, setTotalForMonthExp] = useState("");
  const [totalForMonthInc, setTotalForMonthInc] = useState("");
  const [totalForYearExp, setTotalForYearExp] = useState("");
  const [totalForYearInc, setTotalForYearInc] = useState("");

  const monthylExpensesInput = useRef(null);
  const yearlyExpensesInput = useRef(null);

  const monthylIncomesInput = useRef(null);
  const yearlyIncomesInput = useRef(null);

  const allExpenses = useSelector((state) => state.expenses.allExpenses) || [];
  const allIncomes = useSelector((state) => state.incomes.allIncomes) || [];

  const totalExpenses = allExpenses.reduce((totalAmounts, expense) => {
    return totalAmounts + expense.amount;
  }, 0);
  const totalIncomes = allIncomes.reduce((totalAmounts, income) => {
    return totalAmounts + income.amount;
  }, 0);

  console.log(
    "total expenses and total incomes : ",
    totalExpenses,
    totalIncomes
  );
  const currentBalance = totalIncomes - totalExpenses || 0;

  const calculateMontlyExpense = (month) => {
    let filterExpenses = allExpenses.filter((expense) => {
      return Number(expense.date.slice(5, 7)) === Number(month);
    });
    let total = filterExpenses.reduce((totalAmounts, expense) => {
      return totalAmounts + expense.amount;
    }, 0);

    setTotalForMonthExp(total);
    return total;
  };

  const calculateMontlyIncome = (month) => {
    let filterIncomes = allIncomes.filter((income) => {
      return Number(income.date.slice(5, 7)) === Number(month);
    });
    let total = filterIncomes.reduce((totalAmounts, income) => {
      return totalAmounts + income.amount;
    }, 0);

    setTotalForMonthInc(total);
    return total;
  };

  const calculateYearlyExpense = (year) => {
    let filterExpenses = allExpenses.filter((expense) => {
      return Number(expense.date.slice(0, 4)) === Number(year);
    });
    let total = filterExpenses.reduce((totalAmounts, expense) => {
      return totalAmounts + expense.amount;
    }, 0);

    setTotalForYearExp(total);
    return total;
  };

  const calculateYearlyIncome = (year) => {
    let filterIncomes = allIncomes.filter((income) => {
      return Number(income.date.slice(0, 4)) === Number(year);
    });
    let total = filterIncomes.reduce((totalAmounts, income) => {
      return totalAmounts + income.amount;
    }, 0);

    setTotalForYearInc(total);
    return total;
  };

  return (
    <>
      <Header />
      <div id="FinancialSummary" className="container my-5">
        <header className="text-center">
          <h3>Financial Summary</h3>
        </header>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h4 className="text-center">See Monthly or Yearly Expenses</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="monthly-expenses" className="form-label">
                  Monthly Expenses (Month):
                </label>
                <input
                  ref={monthylExpensesInput}
                  type="text"
                  id="monthly-expenses"
                  className="form-control"
                  required
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={() =>
                    calculateMontlyExpense(monthylExpensesInput.current.value)
                  }
                >
                  Get Total Monthly Expenses
                </button>
                <p>{totalForMonthExp}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="yearly-expenses" className="form-label">
                  Yearly Expenses (Year):
                </label>
                <input
                  ref={yearlyExpensesInput}
                  type="text"
                  id="yearly-expenses"
                  className="form-control"
                  required
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={() =>
                    calculateYearlyExpense(yearlyExpensesInput.current.value)
                  }
                >
                  Get Total Yearly Expenses
                </button>
                <p>{totalForYearExp}</p>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8 col-lg-6">
            <h4 className="text-center">See Monthly or Yearly Incomes</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="monthly-incomes" className="form-label">
                  Monthly Incomes (Month):
                </label>
                <input
                  ref={monthylIncomesInput}
                  type="text"
                  id="monthly-incomes"
                  className="form-control"
                  required
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={() =>
                    calculateMontlyIncome(monthylIncomesInput.current.value)
                  }
                >
                  Get Total Monthly Incomes
                </button>
                <p>{totalForMonthInc}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="yearly-incomes" className="form-label">
                  Yearly Incomes (Year):
                </label>
                <input
                  ref={yearlyIncomesInput}
                  type="text"
                  id="yearly-incomes"
                  className="form-control"
                  required
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={() =>
                    calculateYearlyIncome(yearlyIncomesInput.current.value)
                  }
                >
                  Get Total Yearly Incomes
                </button>
                <p>{totalForYearInc}</p>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            <h4>Current Balance</h4>
            <p>{currentBalance}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialSummary;
