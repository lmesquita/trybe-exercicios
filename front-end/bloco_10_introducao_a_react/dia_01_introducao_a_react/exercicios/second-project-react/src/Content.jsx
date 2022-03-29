import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const receiver = (arrayObj) => arrayObj.map((item) => `O conteúdo é: ${item.conteudo}
  Status: ${item.status}
  Bloco: ${item.bloco}`);

class Content extends React.Component {
  render() {
    return (
      receiver(conteudos)
    );
  }
}

export default Content;
