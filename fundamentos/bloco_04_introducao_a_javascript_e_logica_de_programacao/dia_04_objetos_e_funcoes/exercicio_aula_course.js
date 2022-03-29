let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

/*---------- EXERCÍCIO 1 ----------

console.log("Bem vinda, " + info.personagem);

/*----------------------------------------*/

//*---------- EXERCÍCIO 2 ----------


info['recorrente'] = 'Sim';

//console.log(info);

/*----------------------------------------*/

/*---------- EXERCÍCIO 3 ----------

for(let test in info){
	console.log(test);
}

/*----------------------------------------*/

/*---------- EXERCÍCIO 4 ----------

for (let aux in info) {
  console.log(info[aux]);
}

/*----------------------------------------*/

//*---------- EXERCÍCIO 5 ----------

let segundaInfo = {
	personagem: 'Tio Patinhas',
	origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
	nota: 'O último MacPatinhas',
	recorrente: 'Sim',
}

for (let aux in segundaInfo) {
	console.log(segundaInfo[aux]);
}
/*----------------------------------------*/