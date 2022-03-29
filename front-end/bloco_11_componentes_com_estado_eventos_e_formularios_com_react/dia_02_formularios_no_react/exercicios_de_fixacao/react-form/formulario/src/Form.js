import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form className="form">
          <label>
            Nome
            <input type="text" placeholder="Insira seu primeiro nome" />
          </label>
        </form>

      </div>
    );
  }
}

export default Form;
