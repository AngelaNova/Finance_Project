import React from 'react';
import IncomeList from './IncomeList';

const IncomeFeed = ({incomes}) => {
  return (
    <div>
      <div class="card">
          <div class="card-text">  <IncomeList incomes={incomes}/> </div>
      </div>
    </div>
  )
}

export default IncomeFeed;
