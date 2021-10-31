import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddExpense, setAddCategory } from '../actions';

export default function InputTaple() {
  const form = useRef(null);

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Salário');
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
    setCategory('Salário');
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
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <label HtmlFor="date">
          Data
          <input
            id="date"
            type="date"
            onChange={({ target }) => setDate(target.value)}
          />
        </label>
        {renderCategory()}
        {/* {category === 'Adicionar Categoria' ? addCategory() : renderCategory()} */}

        <label HtmlFor="description">
          Descrição
          <input
            id="description"
            required
            type="text"
            onChange={({ target }) => setDescription(target.value)}
          />
        </label>

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

        <button type="submit">Adicionar despesa</button>
      </form>
    </>
  );
}
