import React from "react";

function renderRow(item) {
  return (
    <tr key={item.id}>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.amount}</td>
      <td>{item.location}</td>
    </tr>
  );
}

function Table(props) {
  return (
    <table className="table">
      <thead className="table-header">
        <tr className="table-header-row">
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {props.data.expenses.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
}

export default Table;
