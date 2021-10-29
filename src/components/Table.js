import React from 'react';
import { useSelector } from 'react-redux';

export default function Table (){
  const expenses = useSelector(state => state.wallet.expenses)


  return(
    <table>
      <thead>
        <tr>
          <th>Data |</th>
          <th>Categoria | </th>
          <th>Descrição |</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <tr>
            <th>{expense.date}</th>
            <th>{expense.category}</th>
            <th>{expense.description}</th>
            <th>{expense.value}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
