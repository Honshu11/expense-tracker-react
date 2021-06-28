import "./App.css";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseBody from "./ExpenseBody";

function App() {
  return (
    <div className="main-container">
      <ExpenseHeader />
      <ExpenseBody />
      <button className="addBtn">Add Expense</button>
    </div>
  );
}

export default App;
