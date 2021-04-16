import React from "react";

function ExpenseContent() {
  return (
    <div className="main-contents">
      <table className="table-contents">
        <tr className="table-header">
          <th>Date</th>
          <th>Merchant</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        <tr className="table-row-1">
          <td>04-01-2020</td>
          <td>Zara</td>
          <td>Full Suit</td>
          <td>$79</td>
        </tr>
      </table>
      <button className="addBtn">Add Expense</button>
    </div>
  );
}

export default ExpenseContent;
