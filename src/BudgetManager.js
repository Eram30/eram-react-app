import React from 'react';

//create a function component with 3 props: budget, setBudget, and remainingBudget
const BudgetManager = ({ budget, setBudget, remainingBudget }) => {
  
  //handle events
  const handleBudgetChange = (e) => {

  
    setBudget(parseFloat(e.target.value) || 0);// // If the input is invalid budget will be set to 0
  };
  const budgetUsagePercentage = (budget - remainingBudget) / budget * 100;
  return (
    <div>
      <h2>Set Monthly Budget</h2>
      
      {/*enter budget*/}
      <input
        type="number" //numeric input
        placeholder="Enter budget" //Placeholder
        value={budget || ""} //Displays current budget
        onChange={handleBudgetChange} //this will call handleBudgetChange when user types in input
      />
      
      {/*remaining budget*/}
      <p>Remaining Budget: ${remainingBudget.toFixed(3)}</p>
      {/* Display a progress bar */}
      <div style={{ width: '100%', height: '20px', backgroundColor: '#e0e0e0' }}>
        <div
          style={{
            width: `${budgetUsagePercentage}%`,
            height: '100%',
            backgroundColor: budgetUsagePercentage >= 80 ? 'red' : 'green',
          }}
        ></div>
      </div>

      <p>{budgetUsagePercentage.toFixed(2)}% of your budget is used.</p>
    </div>
  );
};

 export default BudgetManager;
