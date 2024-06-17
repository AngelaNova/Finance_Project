import React,{ useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createExpense, editExpense, deleteExpense} from '../../redux/actions/expensesActions';
import ExpenseFeed from './ExpenseFeed';


const ExpenseForm = () => {
  //useRef for an object: expense
  const newExpense = useRef({
    amount: null,
    date: null,
    category: null,
    description: null,
  });

  const editId = useRef('');
  const editIdForDescription = useRef('');
  const newAmount = useRef('');
  const newDescription= useRef('');


  const [deleteId, setdeleteId] = useState(0);
  const [expenseToEdit, setExpenseToEdit] = useState({});
  
  
  const dispatch = useDispatch();

  const allExpenses = useSelector(state => state.expenses.allExpenses);
  const categories = useSelector(state => state.expenses.categories);


  console.log("allExpenses: ", allExpenses);
  console.log("1# categories: " ,categories);
  console.log("editId :" , editId)





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
 
  //createExpense = (amount, date, category, description) - id added in redux store
  dispatch(createExpense(newExpense.current.amount.value,newExpense.current.date.value,newExpense.current.category.value,newExpense.current.description.value));

};

  
  const handleAmount = () => {
    setExpenseToEdit((expenseToEdit) => ({...expenseToEdit,amount:newAmount.current.value}));
    console.log("expenseToEdit in handleAmount: ",expenseToEdit);
    dispatch(editExpense(editId.current.value, expenseToEdit)); 
  }

  const handleDescription = () => {
    setExpenseToEdit((expenseToEdit) => ({...expenseToEdit,description:newDescription.current.value}));
    dispatch(editExpense(editIdForDescription.current.value, expenseToEdit)); 
  }


  return (
    <div id="ExpenseManagement" className="container my-5">
    <header className="text-center">
      <h3>Welcome to the Expenses Menu</h3>
    </header>
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">
        <h4 className="text-center">Add an expense below</h4>

        <form onSubmit={handleSubmit}> {/*onSubmit -> creates a new object to add to the list of expenses */}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="form-control"
          ref={(el) => newExpense.current.amount = el}
          required
        />
        </div>
        <div>
          <label htmlFor="date" className="form-label">Date:</label>
          <input
          type="date"
          id="date"
          name="date"
          className="form-control"
          ref={(el) => newExpense.current.date = el}
          defaultValue={formatDate()}
          required
          />
        </div>
        <div>
          <label htmlFor="category" className="form-label">Category:</label>
          <select
          type="text"
          id="category"
          name="category"
          className="form-select"
          ref={(el) => newExpense.current.category = el}
          required
          >
            <option>Select a category</option>
            {categories.map(category => <option key={category}>{category}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="description" className="form-label">Description:</label>
          <input
          type="text"
          id="description"
          name="description"
          className="form-control"
          ref={(el) => newExpense.current.description = el}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">Add Expense</button>
      </form>
      </div>
    </div>
      
      <div className="row justify-content-center mt-4 col-16 col-md-8 col-lg-6 mx-auto">
        <ExpenseFeed expenses={allExpenses}/>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-8 col-lg-6">
          <h3 className="text-center">Edit Expenses below</h3>
          <p className="text-center">Input the id of your expense below</p>
          <div className="mb-3">
            <input className="form-control" ref={editId} type="text" name="expenseId" id="expenseId" required placeholder='Expense Id'/>
          </div>
        <div className="text-center">
          <button className="btn btn-secondary mb-3" onClick={() => setExpenseToEdit( allExpenses.find((expense) => expense.id === editId.current.value))}>Submit Id</button>
          <p className="text-center">
            this is the id you have chosen: {editId.current.value === undefined || editId.current.value === null || !expenseToEdit  ? "No expense with such Id found" : editId.current.value}
          </p>

          <p>This is the expense you have chosen: {expenseToEdit ? JSON.stringify(expenseToEdit) : "None"}
          </p>
        </div>

        <p>Change the amount of the expense. Input the correct amount below:</p>
        <div className="mb-3">
        <input ref={newAmount} className="form-control" type="number" id="newAmount" required placeholder="New Amount"/>
        </div>

        <p>New Amount inputted is : {newAmount.current.value}</p>
        <div className="text-center">
        <button className="btn btn-primary mb-3" onClick={() => handleAmount()}>Submit Edit</button>
        </div>
        {/*<p>To change the description, input the correct description</p>
        <input value={0} type="text" id="expenseTitle" required onChange={(event) => setValueToChange(() => event.target.value)} placeholder='Description'/>
        <button onClick={() => handleEditExpense(editId, expenseToEdit)}>Submit Edit</button>
      */}

      <p className="text-center">Delete an expense. Input the id of the expense to delete it</p>
      <p className="text-center">Delete expense with id: {deleteId}</p>
      <div className=" mb-3">
      <input  className="form-control"value={Number(deleteId)} required onChange={(event) => setdeleteId(Number(event.target.value))} type="number"/>
      </div>
      <div className="text-center">
      <button className="btn btn-danger" onClick={() => (dispatch(deleteExpense(deleteId)))}>Delete</button>
      </div>

      <h4 className="text-center mt-4">Filter Here</h4>

      <form className="text-center">
        <select className="form-select" onChange={(event) => (true)} name="Category" id="category">
          <option value=" ">See All</option>
          {categories.map((category) => <option key={category}  value={category}> {category}</option>)}
        </select>
        
      </form>

            {/*<ExpenseList expenses={filteredExpenses.length > 0 ? filteredExpenses : allExpenses}/>*/}


      <br/>
    </div> 
    </div>
  </div>
  )
}

export default ExpenseForm;
