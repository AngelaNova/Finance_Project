import React,{ useState, useRef } from 'react';
import ExpenseList from './ExpenseList';
import { useSelector, useDispatch } from 'react-redux';
import { createExpense, editExpense, deleteExpense} from '../../redux/actions/expensesActions';


const ExpenseForm = () => {
  //useRef for an object: expense
  const newExpense = useRef({
    amount: null,
    date: null,
    category: null,
    description: null,
  });

  const [valueToChange, setValueToChange] = useState('');
  const [editId, setEditId] = useState(0);
  const [deleteId, setdeleteId] = useState(0);
  const [expenseToEdit, setExpenseToEdit] = useState({});
  
  
  const dispatch = useDispatch();

  const allExpenses = useSelector(state => state.expenses.allExpenses);
  const categories = useSelector(state => state.expenses.categories);

  console.log("1# categories: " ,categories);






// Function to format Date() to YYYY-MM-DD format
function formatDate() {
  
  const date = new Date();

  const year = date.getFullYear(); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0'); 

  
  return `${year}-${month}-${day}`;
}



const handleSubmit = (event) => {
  event.preventDefault();
  console.log("newExpense: ",newExpense.current);
  const expense = {
    amount: newExpense.current.amount.value,
    date: newExpense.current.date.value,
    category: newExpense.current.category.value,
    description: newExpense.current.description.value,
  };
  dispatch(createExpense(expense));
  //clean the references
  Object.keys(newExpense.current).forEach(key => {
    newExpense.current[key].value = '';
  });
};

  
  const handleAmount = () => {
    setExpenseToEdit((expenseToEdit) => ({...expenseToEdit,amount:valueToChange}));
    dispatch(editExpense(editId, expenseToEdit)); 
  }



  return (
    <>
    <header>
      <h3>Welcome to the Expenses Menu</h3>
    </header>
    <div>
      <h4>Add an expense below</h4>

      <form onSubmit={handleSubmit}> {/*onSubmit -> creates a new object to add to the list of expenses */}
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          ref={(el) => newExpense.current.amount = el}
          required
        />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
          type="date"
          id="date"
          name="date"
          ref={(el) => newExpense.current.date = el}
          defaultValue={formatDate()}
          required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
          type="text"
          id="category"
          name="category"
          ref={(el) => newExpense.current.category = el}
          required
          >
            <option>Select a category</option>
            {categories.map(category => <option key={category}>{category}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
          type="text"
          id="description"
          name="description"
          ref={(el) => newExpense.description = el}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
      </form>
      </div>

      
      <div>
         <ExpenseList expenses={allExpenses}/>
      </div>

      <div>
        <h3>Edit Expenses below</h3>
        <p>Input the id of your expense below</p>
        <input value={Number(editId)} type="text" id="expenseId" required onChange={(event) => setEditId(Number(event.target.value))} placeholder='expense id'/>
        <button onClick={() => setExpenseToEdit( allExpenses.find((expense) => expense.id === editId))}>Submit Id</button>
        <p>this is the id {editId}</p>
        
        <p>this is the expense {JSON.stringify(expenseToEdit)}</p>
        <br/>
        <p>To change the amount, input the correct amount</p>
        <input value={Number(valueToChange)} type="number" id="expenseTitle" required onChange={(event) => setValueToChange(Number(event.target.value))} placeholder='Amout'/>
        <button onClick={() => handleAmount()}>Submit Edit</button>

        {/*<p>To change the description, input the correct description</p>
        <input value={0} type="text" id="expenseTitle" required onChange={(event) => setValueToChange(() => event.target.value)} placeholder='Description'/>
        <button onClick={() => handleEditExpense(editId, expenseToEdit)}>Submit Edit</button>
      */}

      <br/>
      <p>To delete an expense</p>
      <p>input the id of the expense to delete it</p>
      <p>Delete expense with id: {deleteId}</p>
      <input  value={Number(deleteId)} required onChange={(event) => setdeleteId(Number(event.target.value))} type="number"/>
      <button onClick={() => (dispatch(deleteExpense(deleteId)))}>Submit Edit</button>

      <h4>Filter Here</h4>
    

      <form >
        <select onChange={(event) => (true)} name="Category" id="category">
          <option value=" ">See All</option>
          {categories.map((category) => <option key={category}  value={category}> {category}</option>)}
        </select>
        
      </form>

            {/*<ExpenseList expenses={filteredExpenses.length > 0 ? filteredExpenses : allExpenses}/>*/}


      <br/>

  </div> 
      
      
    </>
  )
}

export default ExpenseForm;
