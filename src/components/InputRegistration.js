import React from 'react';

import './InputRegistration.css';

export default function InputRegistration() {
  function renderEmail() {
    return (
      <label className="input-email">
        Email:
        <input type="email" />
      </label>
    );
  }

  function renderFirstName() {
    return (
      <label className="input-first-name">
        Nome:
        <input type="text" />
      </label>
    );
  }

  function renderLastName() {
    return (
      <label className="input-last-name">
        Nome:
        <input type="text" />
      </label>
    );
  }

  function renderPassword() {
    return (
      <label className="input-password">
        Nome:
        <input type="text" />
      </label>
    );
  }

  function renderConfirmPassword() {
    return (
      <label className="input-confirm-password">
        Nome:
        <input type="text" />
      </label>
    );
  }

  function renderRadio() {
    return (
      <label className="input-radio">
        <input type="radio" />
        Eu li e aceito os termos de uso
      </label>
    );
  }

  return (
    <div className="conteiner-registration">
      <h1>Cadastro</h1>
      {renderEmail()}
      {renderFirstName()}
      {renderLastName()}
      {renderPassword()}
      {renderConfirmPassword()}
      {renderRadio()}
      <button type="button" className="btn-registration">
        Registrar
      </button>
    </div>
  );
}
