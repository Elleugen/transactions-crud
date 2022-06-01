import React from "react";

const TransactionDetailTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Invoice Id</th>
          <th>Date</th>
          <th>Total Amount</th>
          <th colSpan={3}>Products</th>
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
                <td>{transaction.product1}</td>
                <td>{transaction.product2}</td>
                <td>{transaction.product3}</td>
                <td>
                  <button
                    onClick={() => {
                      return alert(
                        "Cant be done yet. This fiture under maintenance!"
                      );
                    }}
                    className="button edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      return alert(
                        "Cant be done yet. This fiture under maintenance!"
                      );
                      // props.deleteTransaction(transaction.id);
                    }}
                    className="button delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={6}>No transaction</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TransactionDetailTable;
