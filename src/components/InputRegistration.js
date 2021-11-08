import React from 'react';

export default function InputRegistration() {
  function renderEmail() {
    return (
      <label className="input-email">
        Email
        <input type="email" />
      </label>
    );
  }

  function renderFirstName() {
    return (
      <label className="input-first-name">
        Nome
        <input type="text" />
      </label>
    );
  }

  function renderLastName() {
    return (
      <label className="input-last-name">
        Sobrenome
        <input type="text" />
      </label>
    );
  }

  function renderPassword() {
    return (
      <label className="input-password">
        Senha
        <input type="text" />
      </label>
    );
  }

  function renderConfirmPassword() {
    return (
      <label className="input-confirm-password">
        Confirmação de Senha
        <input type="text" />
      </label>
    );
  }

  function renderRadio() {
    return (
      <label htmlFor="checkbox" className="input-checkbox">
        <input id="checkbox" type="checkbox" />
        Eu li e aceito os <span>termos de uso</span>
      </label>
    );
  }

  return (
    <div className="conteiner-registration">
      <h1>Cadastro</h1>
      <form className="form-registration">
        {renderEmail()}
        {renderFirstName()}
        {renderLastName()}
        {renderPassword()}
        {renderConfirmPassword()}
        {renderRadio()}
        <button type="button" className="btn-registration">
          Registrar
        </button>
      </form>
    </div>
  );
}
