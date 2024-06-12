import React,{ useState } from 'react';
import ExpenseList from './ExpenseList';
import { useSelector, useDispatch } from 'react-redux';
import { createExpense, editExpense, deleteExpense} from '../../redux/actions/expensesActions';



const Expenses = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [id,setId] = useState(Number(2));
  const [valueToChange, setValueToChange] = useState('');
  const [editId, setEditId] = useState(0);
  const [editId2, setEditId2] = useState(0);
  const [expenseToEdit, setExpenseToEdit] = useState({});
  
  
  const dispatch = useDispatch();

  const allExpenses = useSelector(state => state.expenses.allExpenses);

  let categories = [...new Set(allExpenses.map((expense) => expense.category))]

  console.log(categories);

// Function to format Date() to YYYY-MM-DD format
function formatDate() {
  
  const date = new Date();

  // Extract the year, month, and day
  const year = date.getFullYear(); 
  // Get month (0-indexed, so add 1) and pad with leading zero
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  //Get day and pad with leading zero if needed
  const day = String(date.getDate()).padStart(2, '0'); 

  // Return the formatted date in YYYY-MM-DD format
  return `${year}-${month}-${day}`;
}





  const handleSubmit = (event) => {
    event.preventDefault();

    // Creating a new expense object
    const newExpense = {
      id: Number(id),
      amount: parseFloat(amount),
      date,
      category,
      description,
    };

    console.log(newExpense);
    // Dispatching the addExpense action
    //dispatch(addExpense(newExpense));

    // Clear the form after submission
    setAmount('');
    setDate('');
    setCategory('');
    setDescription('');

    //increment id
    setId((id) => Number(id) + 1)
  };
  
  const handleAmount = () => {
    setExpenseToEdit((expenseToEdit) => ({...expenseToEdit,amount:valueToChange}));
    const expense =  {...expenseToEdit,amount:valueToChange}
    handleEditExpense(editId, expense);
  }


  const handleEditExpense = (expenseId, updatedProperties) => {
    console.log({expenseId, updatedProperties});
    dispatch(editExpense(expenseId, updatedProperties)); 
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
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          required
        />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
          type="date"
          id="date"
          value={date !== '' ? date : setDate(formatDate())}
          onChange={(event) => setDate(event.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
          type="text"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
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
      <p>Delete expense with id: {editId2}</p>
      <input  value={Number(editId2)} required onChange={(event) => setEditId2(Number(event.target.value))} type="number"/>
      <button onClick={() => (dispatch(deleteExpense(editId2)))}>Submit Edit</button>

      <h4>Filter Here</h4>
    

      {/*<form >
        <select onChange={(event) => (dispatch(filterExpenses(event.target.value)))} name="Category" id="category">
          <option value=" "> See All </option>
          {categories.map((category) => <option key={category}  value={category}> {category}</option>)}
        </select>
        
      </form>*/}

            {/*<ExpenseList expenses={filteredExpenses.length > 0 ? filteredExpenses : allExpenses}/>*/}


      <br/>

  </div> 
      
      
    </>
  )
}

export default Expenses
