import "./App.css";
import ExpenseHeader from "./ExpenseHeader";

function App() {
  return (
    <div className="main-container">
      <ExpenseHeader />
      <button className="addBtn">Add Expense</button>
    </div>
  );
}

export default App;
