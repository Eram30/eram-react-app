import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseAnalytics = ({ expenses }) => {
  // Aggregate expenses by category
  const categoryTotals = expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    return totals;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Expense Distribution',
        data: Object.values(categoryTotals),
        backgroundColor: ['green', 'blue', 'red', 'orange'], // Set colors for each category
        borderColor: ['darkgreen', 'darkblue', 'darkred', 'darkorange'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Expense Analytics</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseAnalytics;
