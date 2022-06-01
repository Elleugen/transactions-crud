import React, { useState, Fragment } from "react";
import AddTransaction from "./transactions/AddTransaction";
import EditTransaction from "./transactions/EditTransaction";
import TransactionsTable from "./tables/TransactionsTable";
import TransactionDetailTable from "./tables/TransactionDetailTable";

const App = () => {
  // Data
  const transactionsData = [
    {
      id: 1,
      invoiceId: "inv-2016ID001",
      date: "2012-12-20",
      totalAmount: 50000,
      product1: "Book",
      product2: "Pen",
      product3: "Pencil",
    },
    {
      id: 2,
      invoiceId: "inv-2016ID002",
      date: "2011-11-19",
      totalAmount: 5000,
      product1: "Shoes",
      product2: "Gloves",
      product3: "Helmet",
    },
    {
      id: 3,
      invoiceId: "inv-2016ID003",
      date: "2010-10-18",
      totalAmount: 300000,
      product1: "Bikes",
      product2: "",
      product3: "Wheel",
    },
    {
      id: 4,
      invoiceId: "inv-2016ID004",
      date: "2009-09-17",
      totalAmount: 90000000,
      product1: "Castle",
      product2: "Key",
      product3: "Rock",
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
  const [viewingDetailTransaction, setViewingDetailTransaction] =
    useState(false);

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

  const viewRow = (transaction) => {
    setViewingDetailTransaction(true);
  };

  return (
    <div className="container">
      {viewingDetailTransaction ? (
        <div className="flex-large">
          <h2>
            <button
              onClick={() => {
                setViewingDetailTransaction(false);
                // props.deleteTransaction(transaction.id);
              }}
              className="back"
            >
              back
            </button>
            Detail transaction
          </h2>
          <TransactionDetailTable
            transactions={transactions}
            editRow={editRow}
            deleteTransaction={deleteTransaction}
          />
        </div>
      ) : (
        <div>
          <h1>CRUD App Dashboard</h1>
          <div className="flex-row">
            <div className="flex-large">
              <h2>All Transactions</h2>
              <TransactionsTable
                transactions={transactions}
                viewRow={viewRow}
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
      )}
    </div>
  );
};

export default App;
