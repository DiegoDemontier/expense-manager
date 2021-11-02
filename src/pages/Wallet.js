import React, { useState } from 'react';
import Header from '../components/Header';
import InputTable from '../components/InputTable';
import CardSection from '../components/CardSection';
import Table from '../components/Table';
import EditTable from '../components/EditTable';

export default function Wallet() {
  const [editExpense, setEditExpense] = useState();
  const [edit, setEdit] = useState(true);

  function handleClick(expense) {
    setEditExpense(expense);
    setEdit(false);
  }

  return (
    <>
      <Header />
      <CardSection />
      {edit ? <InputTable /> : <EditTable expense={editExpense} />}
      <Table handleClick={handleClick} />
    </>
  );
}
