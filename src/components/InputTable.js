import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddExpense } from '../actions';

import './InputTable.css';

export default function InputTable() {
  const form = useRef(null);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Renda');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [id, setId] = useState(0);

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);
  const categories = useSelector((state) => state.wallet.categories);

  useEffect(() => {
    if (expenses.length > 0) setId(expenses[expenses.length - 1].id + 1);
  }, [expenses]);

  function handleSubmit(event) {
    event.preventDefault();
    let controlValue = categories[category] ? value * -1 : value;

    dispatch(
      setAddExpense([
        ...expenses,
        {
          id,
          date,
          category,
          description,
          value: Number(controlValue),
        },
      ])
    );
    setCategory('Renda');
    form.current.reset();
  }

  function renderCategory() {
    return (
      <div className="conteiner-input">
        <label htmlFor="category">
          Categoria
          <select
            className="form_input"
            id="category"
            onChange={({ target }) => setCategory(target.value)}
          >
            {Object.keys(categories).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  return (
    <section>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="conteiner-input">
          <label htmlFor="date">
            Data
            <input
              className="form_input"
              /* required */
              id="date"
              type="date"
              onChange={({ target }) => setDate(target.value)}
            />
          </label>
        </div>
        {renderCategory()}
        <div className="conteiner-input">
          <label htmlFor="description">
            Descrição
            <input
              className="form_input"
              id="description"
              required
              type="text"
              onChange={({ target }) => setDescription(target.value)}
            />
          </label>
        </div>
        <div className="conteiner-input">
          <label htmlFor="value">
            Valor
            <input
              className="form_input"
              id="value"
              step="0.01"
              required
              type="number"
              onChange={({ target }) => setValue(target.value)}
            />
          </label>
        </div>
        <button className="btn-input" type="submit">
          Adicionar despesa
        </button>
      </form>
    </section>
  );
}
