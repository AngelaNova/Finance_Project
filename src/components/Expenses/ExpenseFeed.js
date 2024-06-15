import React from 'react';
import ExpenseList from './ExpenseList';

const ExpenseFeed = ({expenses}) => {
  return (
    <div>
      <div className="card">
          <div className="card-text">  
            <ExpenseList expenses={expenses}/> 
          </div>
      </div>
    </div>
  )
}

export default ExpenseFeed;
