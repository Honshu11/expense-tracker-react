import React, { useState } from "react";
import Budget from "./Components/Budget";
import "bootstrap/dist/css/bootstrap.min.css";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [location, setLocation] = useState("");
  const [expenseItems, setExpenseItems] = useState([
    {
      id: 1,
      date: "8/11/21",
      item: "Redbull",
      amount: 3,
      location: "7 Eleven",
    },
  ]);

  const addExpense = (e) => {
    e.preventDefault();
    const id = expenseItems[expenseItems.length - 1].id + 1; //gets the length of array, targets id object from expenseItems then adds 1.
    const newExpense = {
      date,
      item,
      amount,
      location,
      id,
    };
    const updateItems = [...expenseItems, newExpense]; //spread
    setExpenseItems(updateItems);
  };

  const deleteExpense = (id) => {
    const items = expenseItems.filter((item) => item.id !== id);
    expenseItems(items);
  };

  return (
    <div className="container">
      <header className="mt-3">
        <h1>Expense Tracker</h1>
      </header>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
      </div>
      <h3 className="mt-3">Add Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm
            date={date}
            item={item}
            amount={amount}
            location={location}
            setDate={setDate}
            setItem={setItem}
            setAmount={setAmount}
            setLocation={setLocation}
            addExpense={addExpense}
          />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <table>
        <thead className="table-header">
          <tr className="table-header-row">
            <th>Date</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {expenseItems.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                date={item.date}
                item={item.item}
                amount={item.amount}
                location={item.location}
                id={item.id}
                deleteExpense={deleteExpense}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
