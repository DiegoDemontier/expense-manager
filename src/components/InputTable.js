import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddExpense, setAddCategory } from '../actions';

import './InputTable.css';

export default function InputTable() {
  const form = useRef(null);

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Renda');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  /* const [NewCategory, setNewCategory] = useState(''); */

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

  /* function handleAddCategory() {
    categories.splice(categories.length - 1, 0, NewCategory);
    dispatch(setAddCategory([...categories]));
    setNewCategory('');
    setCategory('Alimentação');
  } */

  function renderCategory() {
    return (
      <div className="conteiner-input">
        <label HtmlFor="category">
          Categoria
          <select
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

  /* function addCategory() {
    return (
      <>
        <label HtmlFor="addCategory">
          Nova Categoria
          <input
            id="addCategory"
            type="text"
            onChange={({ target }) => setNewCategory(target.value)}
          />
        </label>
        <button type="button" onClick={handleAddCategory}>
          +
        </button>
        <button type="button" onClick={() => setCategory('Alimentação')}>
          x
        </button>
      </>
    );
  } */

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="conteiner-input">
          <label HtmlFor="date">
            Data
            <input
              id="date"
              type="date"
              onChange={({ target }) => setDate(target.value)}
            />
          </label>
        </div>
        {renderCategory()}
        {/* {category === 'Adicionar Categoria' ? addCategory() : renderCategory()} */}
        <div className="conteiner-input">
          <label HtmlFor="description">
            Descrição
            <input
              id="description"
              required
              type="text"
              onChange={({ target }) => setDescription(target.value)}
            />
          </label>
        </div>
        <div className="conteiner-input">
          <label HtmlFor="value">
            Valor
            <input
              id="value"
              step="0.01"
              required
              type="number"
              onChange={({ target }) => setValue(target.value)}
            />
          </label>
        </div>
        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}
