import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const onFilterExpensesHandler = (filteredExpenseData) => {
    console.log("Data from ExpenseJS: ", filteredExpenseData);
    setFilterYear(filteredExpenseData);
  };

  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense.date.getFullYear());
    return expense.date.getFullYear().toString() === filterYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterExpensesData={onFilterExpensesHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
