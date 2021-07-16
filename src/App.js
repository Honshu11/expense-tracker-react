import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budgets from "./Components/Budgets";
import Table from "./Components/Table";
import data from "./data.json";
import InputForm from "./Components/InputForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const handleAddItemClick = () => {
    setShowForm(true);
  };
  const handleFormAddItem = (data) => {
    // Do something with Data, insert into database.
  };

  return (
    <div className="container">
      <h1 className="mt3">Expense Tracker</h1>
      <Budgets />
      <InputForm show={showForm} onAddItem={handleFormAddItem} />
      <button
        variant="primary"
        className="primary"
        onClick={handleAddItemClick}
      >
        Add Item
      </button>
      <Table data={data} />
      <button variant="primary" className="primary">
        Add Expense
      </button>
    </div>
  );
}

export default App;
