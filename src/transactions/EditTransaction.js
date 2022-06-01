import React, { useState, useEffect } from "react";

const EditTransaction = (props) => {
  console.log("Props::", props);
  const [transaction, setTransaction] = useState(props.currentTransaction);

  useEffect(() => {
    setTransaction(props.currentTransaction);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTransaction({ ...transaction, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateTransaction(transaction.id, transaction);
      }}
    >
      <label>Invoice Id</label>
      <input
        type="text"
        name="invoiceId"
        value={transaction.invoiceId}
        onChange={handleInputChange}
      />
      <label>Date</label>
      <input
        type="date"
        name="date"
        value={transaction.date}
        onChange={handleInputChange}
      />
      <label>Total Amount</label>
      <input
        type="number"
        name="totalAmount"
        value={transaction.totalAmount}
        onChange={handleInputChange}
      />
      <button className="button update">Update transaction</button>
      <button onClick={() => props.setEditing(false)} className="button cancel">
        Cancel
      </button>
    </form>
  );
};

export default EditTransaction;
