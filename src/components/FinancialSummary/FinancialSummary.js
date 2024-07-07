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

  const totalExpanses = allExpenses.reduce((totalAmounts, expense) => {
    return totalAmounts + expense.amount;
  }, 0);
  const totalIncomes = allIncomes.reduce((totalAmounts, income) => {
    return totalAmounts + income.amount;
  }, 0);

  const currentBalance = totalIncomes - totalExpanses;

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
    <div id="FinancialSummary">
      <Header />
      <h2>See Monthly or Yearly Expenses</h2>
      <input ref={monthylExpensesInput} type="text" required />
      <button
        onClick={() =>
          calculateMontlyExpense(monthylExpensesInput.current.value)
        }
      >
        Get total Monthly Expenses
      </button>

      <p>{totalForMonthExp}</p>

      <input ref={yearlyExpensesInput} type="text" required />
      <button
        onClick={() =>
          calculateYearlyExpense(yearlyExpensesInput.current.value)
        }
      >
        Get total Yearly Expenses
      </button>

      <p>{totalForYearExp}</p>

      <h2>See Monthly or Yearly Incomes</h2>
      <input ref={monthylIncomesInput} type="text" required />
      <button
        onClick={() => calculateMontlyIncome(monthylIncomesInput.current.value)}
      >
        Get total Incomes
      </button>

      <p>{totalForMonthInc}</p>

      <input ref={yearlyIncomesInput} type="text" required />
      <button
        onClick={() => calculateYearlyIncome(yearlyIncomesInput.current.value)}
      >
        Get total Yearly Incomes
      </button>

      <p>{totalForYearInc}</p>

      <p>Current Balance: {currentBalance}</p>
    </div>
  );
};

export default FinancialSummary;
