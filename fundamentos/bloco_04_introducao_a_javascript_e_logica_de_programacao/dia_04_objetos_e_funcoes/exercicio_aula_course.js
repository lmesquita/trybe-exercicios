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

//*---------- EXERCÍCIO 2 ----------

for(let test in info){
	console.log(test);
}

/*----------------------------------------*/