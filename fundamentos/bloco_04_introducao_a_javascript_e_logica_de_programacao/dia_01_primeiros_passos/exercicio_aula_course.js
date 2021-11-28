const a = 30;
const b = 20;
const c = 10;

const salarioBruto = 8000.00;

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

/*------------------------------

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

/*------------------------------ 

/*  EXERCICIO 9 

if (((a % 2) !== 0) || ((b % 2) !== 0) || ((c % 2) !== 0)) {
	console.log("True");
	return true;
 }else {
		console.log("False");
		return true;
 }

/*------------------------------ */

/*  EXERCICIO 10 

let custoTotal = c * 1.2;

if ((a > 0) && (c > 0)) {
	console.log(a - custoTotal);
	return;
} else {
	console.log("Valores informados inválidos")
	return;
}

/*------------------------------ */

/*  EXERCICIO 11

	let salarioBase = 0;

	if (salarioBruto <= 1556.94){
		salarioBase = salarioBruto - (salarioBruto * 0.08);
		console.log("salario base: " + salarioBase);
	} else if (salarioBruto <= 2594.92) {
			salarioBase = salarioBruto - (salarioBruto * 0.09);
			console.log("salario base: " + salarioBase);
		} else if (salarioBruto <= 5189.82) {
				salarioBase = salarioBruto - (salarioBruto * 0.11);
				console.log("salario base: " + salarioBase);
				} else if (salarioBruto > 5189.82) {
						salarioBase = salarioBruto - 570.88;
						console.log("salario base: " + salarioBase);
						}


	let salarioLiquido = 0;

	if (salarioBase <= 1903.98) {
		salarioLiquido = salarioBase;
		console.log("salario líquido: " + salarioLiquido);
		return salarioLiquido;
	} else if (salarioBase <= 2826.65) {
			salarioLiquido = salarioBase - ((salarioBase	* 0.075) - 142.80);
			console.log("salario líquido: " + salarioLiquido);
			return salarioLiquido;
		} else if (salarioBase <= 3751.05) {
				salarioLiquido = salarioBase -  ((salarioBase	* 0.15) - 354.8);
				console.log("salario líquido: " + salarioLiquido);
				return salarioLiquido;
			} else if (salarioBase <= 4664.68) {
					salarioLiquido = salarioBase -  ((salarioBase	* 0.225) - 636.13);
					console.log("salario líquido: " + salarioLiquido);
					return salarioLiquido;
				} else if (salarioBase > 4664.68) {
						salarioLiquido = salarioBase -  ((salarioBase	* 0.275) - 869.36);
						console.log("salario líquido: " + salarioLiquido);
						return salarioLiquido;
					}
/*------------------------------------------------------------------------------------------------ */
