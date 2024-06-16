import React from 'react';

function ExpenseList({expenses}) {


  return (
    <div class="row justify-content-center">
      <h4 className="text-center">Expenses</h4>
      <div className="col-12 mx-auto">
        <ul className="list-unstyled text-center">
          {expenses && expenses.map((expense) => (
            <li key={expense.id}> {expense.description} : {expense.amount} $ | {expense.date} ({expense.category})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;
