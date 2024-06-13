import React,{ useState } from 'react';
import IncomeList from './IncomeList';
import { useSelector, useDispatch } from 'react-redux';
import { addIncome, editIncome, deleteIncome, createForIncome } from '../../redux/actions/incomesActions';


const IncomeForm = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [id,setId] = useState(Number(2));
  const [valueToChange, setValueToChange] = useState('');
  const [editId, setEditId] = useState(0);
  const [editId2, setEditId2] = useState(0);
  const [incomeToEdit, setIncomeToEdit] = useState({});
  
  
  const dispatch = useDispatch();

  const allIncomes = useSelector(state => state.incomes.allIncomes);
  const filteredIncomes = useSelector(state => state.incomes.filteredIncomes);


  let categories = [...new Set(allIncomes.map((income) => income.category))]

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

    // Creating a new income object
    const newIncome = {
      id: Number(id),
      amount: parseFloat(amount),
      date,
      category,
      description,
    };

    console.log(newIncome);
    // Dispatching the addIncome action
    dispatch(addIncome(newIncome));

    // Clear the form after submission
    setAmount('');
    setDate('');
    setCategory('');
    setDescription('');

    //increment id
    setId((id) => Number(id) + 1)
  };
  
  const handleAmount = () => {
    setIncomeToEdit((incomeToEdit) => ({...incomeToEdit,amount:valueToChange}));
    const income =  {...incomeToEdit,amount:valueToChange}
    handleEditIncome(editId, income);
  }


  const handleEditIncome = (incomeId, updatedProperties) => {
    console.log({incomeId, updatedProperties});
    dispatch(editIncome(incomeId, updatedProperties)); 
  }



  return (
    <>
    <header>
      <h3>Welcome to the incomes Menu</h3>
    </header>
    <div>
      <h4>Add an income below</h4>

      <form onSubmit={handleSubmit}> {/*onSubmit -> creates a new object to add to the list of incomes */}
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
      <button type="submit">Add income</button>
      </form>
      </div>

      
      <div>
         <IncomeList incomes={allIncomes}/>
      </div>

      <div>
        <h3>Edit incomes below</h3>
        <p>Input the id of your income below</p>
        <input value={Number(editId)} type="text" id="incomeId" required onChange={(event) => setEditId(Number(event.target.value))} placeholder='income id'/>
        <button onClick={() => setIncomeToEdit( allIncomes.find((income) => income.id === editId))}>Submit Id</button>
        <p>this is the id {editId}</p>
        
        <p>this is the income {JSON.stringify(incomeToEdit)}</p>
        <br/>
        <p>To change the amount, input the correct amount</p>
        <input value={Number(valueToChange)} type="number" id="incomeTitle" required onChange={(event) => setValueToChange(Number(event.target.value))} placeholder='Amout'/>
        <button onClick={() => handleAmount()}>Submit Edit</button>

        {/*<p>To change the description, input the correct description</p>
        <input value={0} type="text" id="incomeTitle" required onChange={(event) => setValueToChange(() => event.target.value)} placeholder='Description'/>
        <button onClick={() => handleEditIncome(editId, incomeToEdit)}>Submit Edit</button>
      */}

      <br/>
      <p>To delete an income</p>
      <p>input the id of the income to delete it</p>
      <p>Delete income with id: {editId2}</p>
      <input  value={Number(editId2)} required onChange={(event) => setEditId2(Number(event.target.value))} type="number"/>
      <button onClick={() => (dispatch(deleteIncome(editId2)))}>Submit Edit</button>

      <h4>Filter Here</h4>
    

      {/*<form >
        <select onChange={(event) => (dispatch(filterIncomes(event.target.value)))} name="Category" id="category">
          <option value=" "> See All </option>
          {categories.map((category) => <option key={category}  value={category}> {category}</option>)}
        </select>
        
      </form>*/}

            {/*IncomeList incomes={filteredIncomes.length > 0 ? filteredIncomes : allIncomes}/>*/}


      <br/>

  </div> 
      
      
    </>
  )
}

export default IncomeForm;
