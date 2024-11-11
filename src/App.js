import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import BudgetManager from './BudgetManager';
import AddExpenseForm from './AddExpenseForm';
import ExpenseAnalytics from './ExpenseAnalytics';
import './styles.css';


const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;

  // Show alert when 80% of budget is used
  const showAlert = totalExpenses >= 0.8 * budget && !alertVisible;
  if (showAlert) {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000); // Hide after 3 seconds
  }

  return (
    <div>
      <h1>Minimalistic Expense Tracker</h1>
      <BudgetManager budget={budget} setBudget={setBudget} remainingBudget={remainingBudget} />
      <AddExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} totalExpenses={totalExpenses} />
      <ExpenseAnalytics expenses={expenses} />

      <div className={`alert ${alertVisible ? 'show' : ''}`}>
        80% of your budget has been used!
      </div>
    </div>
  );
};

export default App;
