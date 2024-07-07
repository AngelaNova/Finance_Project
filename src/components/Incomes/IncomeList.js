import React from "react";

function IncomeList({ incomes }) {
  return (
    <div className="row justify-content-center mt-4 m-2">
      <h4 className="text-center">Incomes</h4>
      <div className="col-12 mr-6 ml-6">
        {incomes &&
          incomes.map((income) => (
            <p
              className="d-flex justify-content-between align-items-center"
              key={income.id}
            >
              <span className="flex-end">
                {income.description} : {income.amount} ${" "}
              </span>
              <span className="flex-end">
                {income.date} | <i>{income.category}</i>
              </span>
            </p>
          ))}
      </div>
    </div>
  );
}

export default IncomeList;
