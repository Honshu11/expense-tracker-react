import React, { useState } from "react";
import Budget from "./Components/Budget";
import "bootstrap/dist/css/bootstrap.min.css";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseItem from "./Components/ExpenseItem";
import { TiPhoneOutline } from "react-icons/ti";

function App() {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [expenseItems, setExpenseItems] = useState([
    {
      id: 1,
      date: null,
      item: "Redbull",
      amount: 3,
      description: "7 Eleven",
    },
    {
      id: 2,
      date: null,
      item: "Sandwich",
      amount: 5,
      description: "7 Eleven",
    },
    {
      id: 3,
      date: null,
      item: "Gasoline",
      amount: 33,
      description: "Moe's Gas Station",
    },
  ]);
  
  const addExpense = (e) => {
    e.preventDefault();
    const id = expenseItems[expenseItems.length - 1].id + 1
    const newExpense = {
      date,
      item,
      amount,
      description,
      id,
    } 
    const updateItems = [...expenseItems, newExpense]
    setExpenseItems(updateItems);
  }



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
            description={description}
            setDate={setDate}
            setItem={setItem}
            setAmount={setAmount}
            setDescription={setDescription}
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
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenseItems.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                date={item.date}
                item={item.item}
                amount={item.amount}
                description={item.description}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
