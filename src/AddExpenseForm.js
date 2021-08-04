import React from "react";

function AddExpenseForm() {
  return (
    <>
      <form action="">
        <div className="col-sm">
          <label htmlFor="date">Date</label>
          <input
            required="required"
            type="date"
            className="form-control"
            id="date"
          />
        </div>
        <div className="col-sm">
          <label htmlFor="item">Item</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="item"
          />
        </div>
        <div className="col-sm">
          <label htmlFor="amount">Amount</label>
          <input
            required="required"
            type="number" //find way to not allow negative numbers
            className="form-control"
            id="amount"
          />
        </div>
        <div className="col-sm">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" />
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
