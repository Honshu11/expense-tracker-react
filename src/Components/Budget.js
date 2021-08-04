import React from "react";

function Budget() {
  return (
    <div className="budget-container row">
      <div className="alert alert-success col-sm">
        <span>Budget: $2000</span>
      </div>
      <div className="alert alert-danger col-sm mx-2">
        <span>Remaining: $750</span>
      </div>
      <div className="alert alert-warning col-sm">
        <span>Spent: $1250</span>
      </div>
    </div>
  );
}

export default Budget;
