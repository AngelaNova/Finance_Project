import React from "react";
import IncomeList from "./IncomeList";

const IncomeFeed = ({ incomes }) => {
  return (
    <div>
      <div className="card">
        <div className="card-text">
          <IncomeList incomes={incomes} />
        </div>
      </div>
    </div>
  );
};

export default IncomeFeed;
