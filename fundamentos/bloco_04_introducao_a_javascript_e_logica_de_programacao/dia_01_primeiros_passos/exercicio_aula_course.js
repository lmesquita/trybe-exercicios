const a = 20;
const b = 60;
const c = 10;

const pecaXadrez = "BISPO";

/*  EXERCICIO 1    
let qualOperacao = "Módulo";

switch (qualOperacao) {

	case "Adição":
			console.log(a + b);
			break;

	case "Subtração":
			console.log(a - b);
			break;

	case "Multiplicação":
			console.log(a * b);
			break;

	case "Divisão":
			console.log(a / b);
			break;
			
	case "Módulo":
			console.log(a % b);
			break;

}

------------------------------

/*  EXERCICIO 2     

if(a < b){
	console.log(b);
	return b;
}else{
	console.log(a);
	return a;
}

/*------------------------------


/*  EXERCICIO 3    

if ((a > b) && (a > c)) {
	console.log(a);
	return a;
}else if ((b > a) && (b > c)) {
	console.log(b);
	return b;
}else if ((c > a) && (c > b)) {
	console.log(c);
	return c;
}

/*------------------------------ 

/*  EXERCICIO 4

	if(a > 0) {
		console.log("Positive");
		return;

	}else if (a < 0) {
		console.log("Negative");
		return;

	}else if (a === 0) {
		console.log("Zero");
		return;
	}

	/*------------------------------ 

	/*  EXERCICIO 5

	if((typeof(a) === "number") && (typeof(b) === "number") && (typeof(c) === "number")) {

		if((a > 0) && (b > 0) && (c > 0)) {
	
			if (( a + b + c) === 180) {
				console.log("True");
				return true;
			} else {
					console.log("False");
					return false;
			} 
		
		}else {
				console.log("False");
				return false;
		}


	} else {
		console.log("Tipo inválido");		
	}

	/*------------------------------ 

	/*  EXERCICIO 6

	switch (pecaXadrez.toLowerCase()) {

		case ("peão") :
			console.log("Um passo a frente");
			break;

		case ("torre") :
			console.log("Move na vertical ou horizontal");
			break;

		case ("bispo") :
			console.log("Move na diagonal");
			break;

		case ("cavalo") :
			console.log("Move em L");
			break;			

		case ("rei") :
			console.log("se move livremente");
			break;

		case ("rainha") :
			console.log("Um passo em qualquer direção");
			break;
	}

	/*------------------------------ 

	/*  EXERCICIO 7

	if ((a <= 100) && (a >= 0)) {

		if (a >= 90) {
			console.log("A");
			return "A";
		} else if (a >= 80) {
			console.log("B");
			return "B";
		} else if (a >= 70) {
			console.log("C");
			return "C";
		} else if (a >= 60) {
			console.log("D");
			return "D";
		} else if (a >= 50) {
			console.log("E");
			return "E";
		} else if (a < 50) {
			console.log("F");
			return "F";
		}
	} else {
		console.log("Nota informada inválida")
	}

	/*------------------------------

/*  EXERCICIO 8

if (((a % 2) === 0) || ((b % 2) === 0) || ((c % 2) === 0)) {
	console.log("True");
	return true;
 }else {
		console.log("False");
		return true;
 }

 	/*------------------------------ */

/*  EXERCICIO 9 */

if (((a % 2) !== 0) || ((b % 2) !== 0) || ((c % 2) !== 0)) {
	console.log("True");
	return true;
 }else {
		console.log("False");
		return true;
 }

 	/*------------------------------ */