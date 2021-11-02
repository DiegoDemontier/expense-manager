import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddExpense } from '../actions';

import './InputTable.css';

export default function InputTable(props) {
  const form = useRef(null);
  const [date, setDate] = useState(props.expense.date);
  const [category, setCategory] = useState(props.expense.category);
  const [description, setDescription] = useState(props.expense.description);
  const [value, setValue] = useState(props.expense.value);

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);
  const categories = useSelector((state) => state.wallet.categories);

  function handleSubmit(event) {
    event.preventDefault();
    let controlValue = categories[category] ? value * -1 : value;

    dispatch(
      setAddExpense([
        ...expenses,
        {
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
            className="form_input-edit"
            value={category}
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
              className="form_input-edit"
              value={date}
              required
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
              className="form_input-edit"
              value={description}
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
              className="form_input-edit"
              value={value}
              id="value"
              step="0.01"
              required
              type="number"
              onChange={({ target }) => setValue(target.value)}
            />
          </label>
        </div>
        <button className="btn-input-edit" type="submit">
          Editar
        </button>
        <button className="btn-input-edit" type="submit">
          Deletar
        </button>
      </form>
    </section>
  );
}
