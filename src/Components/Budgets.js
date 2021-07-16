import React from "react";

function Budgets() {
  return (
    <div className="budget-container">
      <div className="row mb-3">
        <div className="alert alert-success col-sm">Equity: $</div>
        <div className="alert alert-danger col-sm">Remaining Balance: $</div>
        <div className="alert alert-warning col-sm">Spent: $</div>
      </div>
    </div>
  );
}

export default Budgets;
