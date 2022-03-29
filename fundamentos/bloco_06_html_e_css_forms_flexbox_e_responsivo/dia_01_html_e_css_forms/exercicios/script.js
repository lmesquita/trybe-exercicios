function criaOptions (elementoPai, nomeOption, listaSiglas, listaNomes) {
  let recebe = document.getElementById(elementoPai);
  for (let index = 0; index < listaSiglas.length; index++) {
    let cria = new Option();
    cria.name = nomeOption;
    cria.value = listaSiglas[index];
    cria.innerText = listaNomes[index];
    recebe.appendChild(cria);
  }
}

const siglasEstados = ["ac", "al", "am", "ap", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi", "rj", "rn", "ro", "rs", "rr", "sc", "se", "sp", "to"];
const nomesEstados = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];

window.onload = function () {
  criaOptions('estado', 'estados', siglasEstados, nomesEstados);
}