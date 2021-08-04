import React from "react";
import { TiDelete } from "react-icons/ti";

function ExpenseItem(props) {
  console.log(props);

  return (
    <>
      <tbody>
        <tr key={props.id} className="table-row">
          <td>{props.date}</td>
          <td>{props.item}</td>
          <td>{props.amount}</td>
          <td>{props.description}</td>
          <TiDelete size="1.5em"></TiDelete>
        </tr>
      </tbody>
    </>
  );
}

export default ExpenseItem;
