import React from 'react';

function ExpenseList({expenses}) {


  return (
    <div class="row justify-content-center mt-4 m-2">
      <h4 className="text-center">Expenses</h4>
      <div className="col-12 mx-auto">
        <div className="mt-2">
          {expenses && expenses.map((expense) => (
            <p className="d-flex justify-content-center align-items-center" key={expense.id}> 
               {expense.description} : {expense.amount} $
              <span className="flex-end">{expense.date} | <i>{expense.category}</i></span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpenseList;
