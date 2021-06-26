import React from "react";

function ExpenseHeader() {
  return (
    <div>
      <table>
        <thead className="table-head">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Location</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default ExpenseHeader;
