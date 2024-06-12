import React from 'react';
import IncomeList from './IncomeList';

const IncomeFeed = ({incomes}) => {
  return (
    <div>
      <div class="card">
          <p class="card-text">  <IncomeList incomes={incomes}/> </p>
      </div>
    </div>
  )
}

export default IncomeFeed;
