import React from 'react';
import ExpenseList from './ExpenseList';

const ExpenseFeed = ({expenses}) => {
  return (
    <div>
      <div class="card">
          <p class="card-text">  <ExpenseList expenses={expenses}/> </p>
      </div>
    </div>
  )
}

export default ExpenseFeed;
