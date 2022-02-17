// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculaNota = (gabarito, respostas, checkGabarito) => {
  const received = checkGabarito(gabarito, respostas);
  return received;
};

const checkGabarito = (gabarito, respostas) => {
  let nota = 0;

  for (let index = 0; index < gabarito.length; index += 1) {
    if (respostas[index] === gabarito[index]) {
      nota += 1;
    } else if (respostas[index] === 'N.A') {
      nota = nota;
    } else {
      nota -= 0.5;
    }
  }

  return nota;
}

console.log(calculaNota(RIGHT_ANSWERS, STUDENT_ANSWERS, checkGabarito));
