import React from 'react';
import { useSelector } from 'react-redux';

import './Header.css';

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
    <div className="conteiner-header">
      <div className="conteiner-card">
        <div className="card-info">
          <div>{`R$ ${totalIncome.toFixed(2)}`}</div>
          <p>Receita</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/ultraviolet/60/000000/money--v2.png"
            alt=""
          />
        </div>
      </div>

      <div className="conteiner-card">
        <div className="card-info">
          {`R$ ${(totalExpenses * -1).toFixed(2)}`}
          <p>Despesa</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/ultraviolet/60/000000/check.png"
            alt=""
          />
        </div>
      </div>

      <div className="conteiner-card">
        <div className="card-info">
          {totalBalance > 0
            ? `R$ ${totalBalance.toFixed(2)}`
            : `R$ ${(totalBalance * -1).toFixed(2)}`}
          <p>Balanço</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/ultraviolet/60/000000/wallet.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
