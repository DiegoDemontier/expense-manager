import React from 'react';
import { useSelector } from 'react-redux';

import './Table.css';

export default function Table() {
  const expenses = useSelector((state) => state.wallet.expenses);

  return (
    <main>
      <table>
        <thead>
          <tr className="table-head">
            <th>Data</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <hr />
        <tbody className="table-body">
          {expenses.map((expense, index) => (
            <tr key={index}>
              {console.log(expense.date)}
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td className={expense.value > 0 ? 'green' : 'red'}>
                {expense.value > 0
                  ? `R$ ${expense.value.toFixed(2)}`
                  : `R$ ${(expense.value * -1).toFixed(2)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
