import React from "react";
import { TiDelete } from "react-icons/ti";

function ExpenseItem(props) {
  return (
    <tr key={props.id} className="table-row">
      <td>{props.date}</td>
      <td>{props.item}</td>
      <td>{props.amount}</td>
      <td>{props.description}</td>
      <TiDelete
        size="1.5em"
        onClick={() => props.deleteExpense(props.id)}
      ></TiDelete>
    </tr>
  );
}

export default ExpenseItem;
