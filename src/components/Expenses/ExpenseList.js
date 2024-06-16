import React from 'react';

function ExpenseList({expenses}) {


  return (
    <div>
      <h4 className="text-center">Expenses</h4>
      <div className="col-12 col-md-8 col-lg-4">
        <ul>
          {expenses && expenses.map((expense) => (
            <li key={expense.id}> {expense.description} : {expense.amount} $ | {expense.date} ({expense.category})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;
