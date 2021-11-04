import React from 'react';
import { useSelector } from 'react-redux';

import './Table.css';

export default function Table(props) {
  const expenses = useSelector((state) => state.wallet.expenses);

  function formatDate(date) {
    let year = date.substr(0, 4);
    let month = date.substr(5, 2);
    let day = date.substr(8, 4);
    return `${day}/${month}/${year}`;
  }

  return (
    <main>
      <table>
        <thead>
          <tr className="table-head">
            <th>Data</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{formatDate(expense.date)}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td className={expense.value > 0 ? 'green' : 'red'}>
                {expense.value > 0
                  ? `R$ ${expense.value.toFixed(2)}`
                  : `R$ ${(expense.value * -1).toFixed(2)}`}
              </td>
              <td>
                <button
                  onClick={() => props.handleClick(expense)}
                  type="button"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
