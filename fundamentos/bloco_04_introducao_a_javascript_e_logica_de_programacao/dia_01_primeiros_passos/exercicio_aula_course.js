const a = 20;
const b = 60;
const c = 100;

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

	/*------------------------------ */


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