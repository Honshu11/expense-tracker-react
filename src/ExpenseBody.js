import React from "react";

function ExpenseBody(props){
    //TODO: Create an array with data and use the map method to iterate through the array and pass it to the table body.
    const expenseData = [
        {
            date: date,
            description: description,
            amount: amount,
            location: location,
        }
    ]

    
    return(
        <div>
            <tbody className="table-body">
                <tr>
                    <td>{expenseData.date}</td>
                    <td>{expenseData.description}</td>
                    <td>{expenseData.amount}</td>
                    <td>{expenseData.location}</td>
                </tr>
            </tbody>
        </div>
    )
};

export default ExpenseBody;