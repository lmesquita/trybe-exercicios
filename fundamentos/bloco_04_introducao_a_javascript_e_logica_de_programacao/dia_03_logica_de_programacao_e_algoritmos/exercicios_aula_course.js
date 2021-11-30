/*---------- EXERCÍCIO 1 ----------

let n = 3;
let simbolo = '*';
let aux = '';

for (let i = 0; i < n; i++) {
	aux += simbolo;
}

for (let i = 0; i < n; i++) {
	console.log(aux);
}

/*----------------------------------------*/

/*---------- EXERCÍCIO 2 ----------

let n = 5;
let simbolo = '*';
let aux = '';

for (let i = 0; i <= n; i++) {
	console.log(aux);
	aux += simbolo;
}


/*----------------------------------------*/

/*---------- EXERCÍCIO 3 ----------*/

let n = 5;
let simbolo = '*';
let aux = '';
let posicao = n;

for (let i = 0; i < n; i++) {
	for (let j = 0; j <= n; j++) {
		if (j < posicao) {
			aux = aux + ' ';
		} else {
			aux = aux + simbolo;
		}
	}

	console.log(aux);
	aux = '';
	posicao--;
}


/*----------------------------------------*/