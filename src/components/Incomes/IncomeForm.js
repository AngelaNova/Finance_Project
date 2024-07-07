import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createIncome,
  editIncome,
  deleteIncome,
} from "../../redux/actions/incomesActions";
import IncomeFeed from "./IncomeFeed";
import DeleteModal from "../DeleteModal";
import Header from "../Header";

const IncomeForm = () => {
  //useRef for an object: income
  const newIncome = useRef({
    amount: null,
    date: null,
    category: null,
    description: null,
  });

  const editId = useRef("");
  const newAmount = useRef("");
  const newDescription = useRef("");
  const deleteId = useRef("");

  const [incomeToEdit, setIncomeToEdit] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const dispatch = useDispatch();

  const allIncomes = useSelector((state) => state.incomes.allIncomes);
  const categories = useSelector((state) => state.incomes.categories);

  console.log("allIncomes: ", allIncomes);
  console.log("1# categories: ", categories);
  console.log("editId :", editId);

  // Function to format Date() to YYYY-MM-DD format
  function formatDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("newIncome: ", newIncome.current);

    //createIncome = (amount, date, category, description) - id added in redux store
    dispatch(
      createIncome(
        newIncome.current.amount.value,
        newIncome.current.date.value,
        newIncome.current.category.value,
        newIncome.current.description.value
      )
    );
  };

  const handleEditOfAmount = () => {
    setIncomeToEdit((incomeToEdit) => ({
      ...incomeToEdit,
      amount: Number(newAmount.current.value),
    }));

    // Dispatch the action after updating the state
    dispatch(
      editIncome(editId.current.value, {
        ...incomeToEdit,
        amount: Number(newAmount.current.value),
      })
    );
  };

  const handleEditOfDescription = () => {
    setIncomeToEdit((incomeToEdit) => ({
      ...incomeToEdit,
      description: newDescription.current.value,
    }));

    // Dispatch the action after updating the state
    dispatch(
      editIncome(editId.current.value, {
        ...incomeToEdit,
        description: newDescription.current.value,
      })
    );
  };

  //Show and hide Delete Modal

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteIncome(deleteId));
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <Header />

      <div id="IncomeManagement" className="container my-5">
        <header className="text-center">
          <h3>Welcome to the Incomes Menu</h3>
        </header>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h4 className="text-center">Add an income below</h4>

            <form onSubmit={handleSubmit}>
              {" "}
              {/*onSubmit -> creates a new object to add to the list of incomes */}
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="form-control"
                  ref={(el) => (newIncome.current.amount = el)}
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="form-label">
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  ref={(el) => (newIncome.current.date = el)}
                  defaultValue={formatDate()}
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="form-label">
                  Category:
                </label>
                <select
                  type="text"
                  id="category"
                  name="category"
                  className="form-select"
                  ref={(el) => (newIncome.current.category = el)}
                  required
                >
                  <option>Select a category</option>
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="form-control"
                  ref={(el) => (newIncome.current.description = el)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Add Income
              </button>
            </form>
          </div>
        </div>

        <div className="row justify-content-center mt-4 col-16 col-md-8 col-lg-6 mx-auto">
          <IncomeFeed incomes={allIncomes} />
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8 col-lg-6">
            <h3 className="text-center">Edit Incomes below</h3>
            <p className="text-center">Input the id of your income below</p>
            <div className="mb-3">
              <input
                className="form-control"
                ref={editId}
                type="text"
                name="incomeId"
                id="incomeId"
                required
                placeholder="Income Id"
              />
            </div>
            <div className="text-center">
              <button
                className="btn btn-secondary mb-3"
                onClick={() =>
                  setIncomeToEdit(
                    allIncomes.find(
                      (income) => income.id === editId.current.value
                    )
                  )
                }
              >
                Submit Id
              </button>
              <p className="text-center">
                this is the id you have chosen:{" "}
                {editId.current.value === undefined ||
                editId.current.value === null ||
                !incomeToEdit
                  ? "No income with such Id found"
                  : editId.current.value}
              </p>

              <p>
                This is the income you have chosen:{" "}
                {incomeToEdit ? JSON.stringify(incomeToEdit) : "None"}
              </p>
            </div>

            <p>
              Change the amount of the income. Input the correct amount below:
            </p>
            <div className="mb-3">
              <input
                ref={newAmount}
                className="form-control"
                type="number"
                id="newAmount"
                required
                placeholder="New Amount"
              />
            </div>

            <p>New Amount inputted is : {newAmount.current.value}</p>
            <div className="text-center">
              <button
                className="btn btn-primary mb-3"
                onClick={handleEditOfAmount}
              >
                Submit Edit
              </button>
            </div>

            <p>
              Change the description of the income. Input the correct
              description below:
            </p>
            <div className="mb-3">
              <input
                ref={newDescription}
                className="form-control"
                type="text"
                id="newDescription"
                required
                placeholder="New Description"
              />
            </div>

            <p>New Description inputted is : {newDescription.current.value}</p>
            <div className="text-center">
              <button
                className="btn btn-primary mb-3"
                onClick={handleEditOfDescription}
              >
                Submit Edit
              </button>
            </div>

            <p className="text-center">
              Delete an income. Input the id of the income to delete it
            </p>
            <div className=" mb-3">
              <input
                className="form-control"
                ref={deleteId}
                required
                type="text"
              />
              <p className="text-center">
                Delete income with id: {deleteId.current.value}
              </p>
            </div>
            <div className="text-center">
              {
                //make sure to update handleDeleteClick - it doesn't work as intended TODO
              }
              <button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button>
            </div>

            {showDeleteModal && (
              <DeleteModal
                deleteId={deleteId}
                onConfirm={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
              />
            )}

            <h4 className="text-center mt-4">Filter Here</h4>

            <form className="text-center">
              <select
                className="form-select"
                onChange={(event) => true}
                name="Category"
                id="category"
              >
                <option value=" ">See All</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {" "}
                    {category}
                  </option>
                ))}
              </select>
            </form>

            {/*<IncomeList incomes={filteredIncomes.length > 0 ? filteredIncomes : allIncomes}/>*/}

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default IncomeForm;
