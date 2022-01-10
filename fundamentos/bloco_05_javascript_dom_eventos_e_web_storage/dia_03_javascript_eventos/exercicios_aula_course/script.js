function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// EXERCÍCIO 1 --------------------

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList  = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const days = dezDaysList[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      dayListItem.className = 'day';

      if ((dezDaysList[index] === 24) || (dezDaysList[index] === 25) || (dezDaysList[index] === 31)) {
				dayListItem.className += ' holiday';
      }
			
			if ((dezDaysList[index] === 4) || (dezDaysList[index] === 11) || (dezDaysList[index] ===18) || (dezDaysList[index] === 25)) {
				dayListItem.className += ' friday';
			}
  
      monthDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheMonth();

// ----------------------------------------

// EXERCÍCIO 2 --------------------

function criaBotaoFeriado(string) {
	let btnContainer = document.querySelector('.buttons-container');
	let divBotao = document.createElement('button');
	divBotao.innerText = string;
	divBotao.id = 'btn-holiday';

	btnContainer.appendChild(divBotao);
}

let feriado = 'Feriados';
criaBotaoFeriado(feriado);

// ----------------------------------------

// EXERCÍCIO 3 --------------------

function alteraCor() {
	let btnFeriado = document.getElementById('btn-holiday');
	let coloreFeriado = document.querySelectorAll('.holiday');

	btnFeriado.addEventListener("click", function(){
		for (index = 0; index < coloreFeriado.length; index++){
			if (coloreFeriado[index].style.backgroundColor !== 'white'){
				coloreFeriado[index].style.backgroundColor = 'white';
			} else {
				coloreFeriado[index].style.backgroundColor = 'rgb(238,238,238)';
			}
		}
	});

}

alteraCor();

// ----------------------------------------

// EXERCÍCIO 4 --------------------

function criaBotaoSextaFeira(string) {
	let btnContainer = document.querySelector('.buttons-container');
	let divBotao = document.createElement('button');
	divBotao.innerText = string;
	divBotao.id = 'btn-friday';

	btnContainer.appendChild(divBotao);
}

let sextou = 'Sexta-feira';
criaBotaoSextaFeira(sextou);

// ----------------------------------------

// EXERCÍCIO 5 --------------------

function modificaTexto() {
	let btnSexta = document.getElementById('btn-friday');
	let textoSextou = document.querySelectorAll('.friday');

	btnSexta.addEventListener("click", function(){
		for (index = 0; index < textoSextou.length; index++){
			if (textoSextou[index].innerText !== 'Sextou'){
				textoSextou[index].innerText = 'Sextou';
			} else if (index === 0) {
				textoSextou[index].innerText = 4;
			} else if (index === 1) {
				textoSextou[index].innerText = 11;
			}else if (index === 2) {
				textoSextou[index].innerText = 18;
			}else if (index === 3) {
				textoSextou[index].innerText = 25;
			}
		}
	});

}

modificaTexto();