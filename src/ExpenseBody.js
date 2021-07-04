import React from "react";

function ExpenseBody(props){
    //TODO: Create an array with data and use the map method to iterate through the array and pass it to the table body.
        // const expenseData = [
        //     {
        //         date,
        //         description,
        //         amount,
        //         location,
        //     }
        // ]

        //TODO: How do I aquire the information being passed from the expenseData array to be passed to the table rendered on the web browser.
        // onClick button in the App.js? map method? 
        return(
            <div>
                <tbody className="table-body">
                    <tr>
                        <td>{props.expenseData.date}</td>
                        <td>{props.expenseData.description}</td>
                        <td>{props.expenseData.amount}</td>
                        <td>{props.expenseData.location}</td>
                        <td>Testing</td>
                    </tr>
                </tbody>
            </div>
        )
    }   

export default ExpenseBody;