import React from 'react'

function ExpenseContent(){
    return(
        <div>
            <table className="table-contents">
                <tr className="table-header">
                    <th>Date</th>
                    <th>Merchant Name</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr className="table-row-1">
                    <td>04-01-2020</td>
                    <td>Zara</td>
                    <td>Suit kit</td>
                    <td>$79</td>
                </tr>
            </table>
        </div>
    )
}


export default ExpenseContent