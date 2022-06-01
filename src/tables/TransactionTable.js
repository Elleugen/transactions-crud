import React from "react";

const TransactionTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Invoice Id</th>
          <th>Date</th>
          <th>Total Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.transactions.length > 0 ? (
          props.transactions.map((transaction) => {
            let totalAmountFormatted = transaction.totalAmount.toLocaleString();
            return (
              <tr key={transaction.id}>
                <td>{transaction.invoiceId}</td>
                <td>{transaction.date}</td>
                <td>Rp {totalAmountFormatted}</td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(transaction);
                    }}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deleteTransaction(transaction.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3}>No transaction</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TransactionTable;
