import { useState } from "react";
import ReactDOM from "react-dom/client";


  function AddExpenseForm({addExpense}) { //passing addExpense(expense) here
    const [inputs, setInputs] = useState({})



    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (inputs.category && inputs.amount && inputs.date) {
        const expense = {
          category: inputs.category,
          amount: parseFloat(inputs.amount),
          date: inputs.date,
        };
        addExpense(expense); // Pass the new expense to the App component
  
      console.log(inputs);
    }
  } 

  return (
    <form onSubmit={handleSubmit}>
      {/*category*/}
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={inputs.category || ""}
          onChange={handleChange}
        />
      </label>

      {/*amount*/}
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={inputs.amount || ""}
          onChange={handleChange}
        />
      </label>

      {/*Date*/}
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
