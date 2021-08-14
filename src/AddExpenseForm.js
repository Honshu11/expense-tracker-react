import React from "react";

function AddExpenseForm(props) {
  return (
    <>
      <form onSubmit={props.addExpense}>
        <div className="col-sm">
          <label htmlFor="date">Date</label>
          <input
            required="required"
            type="date"
            className="form-control"
            id="date"
            value={props.date}
            onChange={(e) => props.setDate(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="item">Item</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="item"
            value={props.item}
            onChange={(e) => props.setItem(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="amount">Amount</label>
          <input
            required="required"
            type="number" //find way to not allow negative numbers
            className="form-control"
            id="amount"
            value={props.amount}
            onChange={(e) => props.setAmount(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={props.location}
            onChange={(e) => props.setLocation(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddExpenseForm;
