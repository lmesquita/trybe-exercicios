const obj = {
  nome: 'Lucas',
};

function acrescentaObj(objeto, nomeChave, valor) {
  let newKey = nomeChave;
  const valueKey = valor;
  objeto[newKey] = valor;

  console.table(obj);
  console.log(Object.values(obj));
}

acrescentaObj(obj, 'idade', '27');