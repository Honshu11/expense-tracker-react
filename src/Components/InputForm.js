import React from "react";
import "./input-form.css";

function InputForm(props) {
  const handleAddItem = () => {
    const data = "gather data";
    //Here gather data from form
    props.onAddItem(data);
  };
  if (props.show) {
    return (
      <div className="inputForm">
        <div>
          <div className="label">Date</div>
          <div>
            <input type="date" id="formDate" />
          </div>
        </div>
        <div>
          <div className="label">Description</div>
          <div>
            <input type="text" id="formDescription" />
          </div>
        </div>
        <div>
          <div className="label">Amount</div>
          <div>
            <input type="text" id="formAmount" />
          </div>
        </div>
        <div>
          <div className="label">Location</div>
          <div>
            <input type="text" id="formLocation" />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default InputForm;
