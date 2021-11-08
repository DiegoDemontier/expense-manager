import React from 'react';

export default function InputLogin() {
  function renderPassword() {
    return (
      <label className="input-password">
        Senha
        <input type="text" />
      </label>
    );
  }

  function renderEmail() {
    return (
      <label className="input-email">
        Email
        <input type="email" />
      </label>
    );
  }

  function teste(event) {
    event.preventDefault();
    console.log('diego');
  }

  return (
    <div className="conteiner-login">
      <h1>Login</h1>
      <form onSubmit={teste}>
        {renderEmail()}
        {renderPassword()}
        <div className="btn-login">
          <button type="submit">Entrar</button>
          <button type="button">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
