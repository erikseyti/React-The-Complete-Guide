import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [showForm, setShowForm] = useState(false)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    console.log("title Changed!");
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // Use this approuch to handle an update of userState,
    //Instead of the method above
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         enteredTitle: event.target.value
    //     }
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   setEnteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   setEnteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // prevent the submit of the form be trigger
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount('');
    setEnteredDate('');
  };

  function openForm () {
    setShowForm(true)
  }

  function closeForm() {
    setShowForm(false)
  }

  if(showForm === false) {
    return (<div className="new-expense__actions open-expense__menu">
    <button onClick={openForm} >Add new Expense</button>
  </div>)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
            max="2022-12-31"
          />
        </div>
      </div>
      <div className='button-expense__group'>
        <div className='new-expense__actions'>
          <button type='button' onClick={closeForm}>Cancel</button>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
