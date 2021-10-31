import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const expenses = useSelector((state) => state.wallet.expenses);
  const total = expenses.reduce((acc, curr) => acc + Number(curr.value), 0);

  return (
    <>
      <span>Receita</span>
      <span>Despesa</span>
      <span>Balanço {`R$ ${total}`}</span>
    </>
  );
}
