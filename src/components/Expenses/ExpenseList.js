import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div className="row justify-content-center mt-4 m-2">
      <h4 className="text-center">Expenses</h4>
      <div className="col-12 mr-6 ml-6">
        {expenses &&
          expenses.map((expense) => (
            <div className="">
              <p
                className="d-flex justify-content-between align-items-center"
                key={expense.id}
              >
                <span className="flex-end">
                  {expense.description} : {expense.amount} ${" "}
                </span>
                <span className="flex-end">
                  {expense.date} | <i>{expense.category}</i>
                </span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ExpenseList;
