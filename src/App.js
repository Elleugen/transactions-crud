import React, { useState, Fragment } from "react";
import AddTransaction from "./transactions/AddTransaction";
import EditTransaction from "./transactions/EditTransaction";
import TransactionTable from "./tables/TransactionTable";

const App = () => {
  // Data
  const transactionsData = [
    {
      id: 1,
      invoiceId: "inv-2016ID001",
      date: "2012-12-20",
      totalAmount: 50000,
    },
    {
      id: 2,
      invoiceId: "inv-2016ID002",
      date: "2011-11-19",
      totalAmount: 5000,
    },
    {
      id: 3,
      invoiceId: "inv-2016ID003",
      date: "2010-10-18",
      totalAmount: 300000,
    },
    {
      id: 4,
      invoiceId: "inv-2016ID004",
      date: "2009-09-17",
      totalAmount: 300000,
    },
  ];

  const initialFormState = {
    id: null,
    invoiceId: "",
    date: "",
    totalAmount: 0,
  };

  // Setting state
  const [transactions, setTransactions] = useState(transactionsData);
  const [currentTransaction, setCurrentTransaction] =
    useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addTransaction = (transaction) => {
    transaction.id = transactions.length + 1;
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setEditing(false);

    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const updateTransaction = (id, updatedTransaction) => {
    setEditing(false);

    setTransactions(
      transactions.map((transaction) =>
        transaction.id === id ? updatedTransaction : transaction
      )
    );
  };

  const editRow = (transaction) => {
    setEditing(true);

    setCurrentTransaction({
      id: transaction.id,
      invoiceId: transaction.invoiceId,
      date: transaction.date,
      totalAmount: transaction.totalAmount,
    });
  };

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View transactions</h2>
          <TransactionTable
            transactions={transactions}
            editRow={editRow}
            deleteTransaction={deleteTransaction}
          />
        </div>
        <div className="flex-large">
          {/* <div className={editing ? "flex-large editTransaction" : "flex-large"}> */}
          {editing ? (
            <Fragment>
              <h2>Edit transaction</h2>
              <EditTransaction
                className="editTransaction"
                editing={editing}
                setEditing={setEditing}
                currentTransaction={currentTransaction}
                updateTransaction={updateTransaction}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add transaction</h2>
              <AddTransaction
                className="addTransaction"
                addTransaction={addTransaction}
              />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
