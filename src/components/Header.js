import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const expenses = useSelector((state) => state.wallet.expenses);

  const totalIncome = expenses.reduce((acc, curr) => {
    if (curr.value > 0) return acc + curr.value;
    return acc;
  }, 0);

  const totalExpenses = expenses.reduce((acc, curr) => {
    if (curr.value < 0) return acc + curr.value;
    return acc;
  }, 0);

  const totalBalance = totalIncome + totalExpenses;

  return (
    <>
      <span>Receita{`R$ ${totalIncome.toFixed(2)}`}</span>
      <span>Despesa{`R$ ${(totalExpenses * -1).toFixed(2)}`}</span>
      <span>
        Balanço
        {totalBalance > 0
          ? `R$ ${totalBalance.toFixed(2)}`
          : `R$ ${(totalBalance * -1).toFixed(2)}`}
      </span>
    </>
  );
}
