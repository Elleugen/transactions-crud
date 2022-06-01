import React, { useState } from "react";

const AddTransaction = (props) => {
  const initialFormState = {
    id: null,
    invoiceId: "",
    date: "",
    totalAmount: 0,
  };
  const [transaction, setTransaction] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTransaction({ ...transaction, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!transaction.invoiceId || !transaction.date)
          return alert("Invoice id and date cant be empty!");

        props.addTransaction(transaction);
        setTransaction(initialFormState);
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
        min="0"
        value={transaction.totalAmount}
        onChange={handleInputChange}
      />
      <button className="button add">Add new transaction</button>
    </form>
  );
};

export default AddTransaction;
