import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  //    const [enteredTitle, setEnteredTitle] = useState('');
  //    const [enteredAmount, setEnteredAmount] = useState('');
  //    const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    console.log("title Changed!");
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    // setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)
    setUserInput({
      ...userInput,
      setEnteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value)
    setUserInput({
      ...userInput,
      setEnteredDate: event.target.value,
    });
  };

  return (
    <form className="new-expense__form">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            onChange={amountChangeHandler}
            steap="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            onChange={dateChangeHandler}
            max="2022-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
