import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const dataExpense = [
    {
      id: 1,
      date: "8/4/21",
      item: "Redbull",
      amount: 3,
      description: "7 Eleven",
    },
    {
      id: 2,
      date: "8/4/21",
      item: "Sandwich",
      amount: 5,
      description: "7 Eleven",
    },
    {
      id: 3,
      date: "8/5/21",
      item: "Gasoline",
      amount: 33,
      description: "Moe's Gas Station",
    },
  ];

  return (
    <>
      dataExpense.map((expense) => (
      {
        <ExpenseItem
          id={dataExpense.id}
          date={dataExpense.date}
          item={dataExpense.item}
          amount={dataExpense.amount}
          description={dataExpense.description}
        />
      }
      )
    </>
  );
}

export default ExpenseList;
