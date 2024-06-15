import React from 'react';

function ExpenseList({expenses}) {


  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expenses && expenses.map((expense) => (
          <li key={expense.id}> {expense.description} : {expense.amount} $ | {expense.date} ({expense.category})</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
