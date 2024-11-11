import React, { useState } from 'react';

const ExpenseList = ({ expenses, totalExpenses }) => {
  const [sortBy, setSortBy] = useState('date');

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortBy === 'amount') return a.amount - b.amount;
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div>
      <h2>Expenses</h2>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        <option value="category">Category</option>
      </select>
      <ul>
        {sortedExpenses.map((expense) => (
          <li key={expense.id}>
            {expense.date} - {expense.category}: ${expense.amount}
          </li>
        ))}
      </ul>
      <p>Total Expenses: {totalExpenses}</p>
    </div>
  );
};

export default ExpenseList;