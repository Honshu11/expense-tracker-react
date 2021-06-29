import React from "react";

function ExpenseBody(props){
    //TODO: Create an array with data and use the map method to iterate through the array and pass it to the table body.
    const handleSubmit =(e) => {
        e.preventDefault();
        const expenseData = [
            {
                date,
                description,
                amount,
                location,
            }
        ]
    }
    
    return(
        <div>
            <tbody className="table-body">
                <tr>
                    <td>{props.expenseData.date}</td>
                    <td>{props.expenseData.description}</td>
                    <td>{props.expenseData.amount}</td>
                    <td>{props.expenseData.location}</td>
                </tr>
            </tbody>
        </div>
    )
};

export default ExpenseBody;