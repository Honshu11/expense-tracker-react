import React from "react";
import Budget from "./Components/Budget";
import "bootstrap/dist/css/bootstrap.min.css";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
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
          <AddExpenseForm />
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
        <ExpenseItem />
      </table>
    </div>
  );
}

export default App;
