import React from 'react';


function IncomeList({incomes}) {


  return (
    <div>
      <h1>Incomes</h1>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>{income.description} : {income.amount} $ | {income.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeList;
