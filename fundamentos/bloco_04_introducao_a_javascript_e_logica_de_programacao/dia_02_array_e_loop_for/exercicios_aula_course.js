let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*---------- EXERCÍCIO 1 ---------- 

for (let x =0; x < numbers.length; x++) {
    console.log(numbers[x]);
}

/*---------------------------------------- */

/*---------- EXERCÍCIO 2 ---------- 
let soma =0;

for (let x =0; x < numbers.length; x++) {
    soma += numbers[x];
}

console.log("A soma dos números é:", soma);

/*---------------------------------------- */

/*--------- EXERCÍCIO 3 ---------- 
let cont =0;
let media = 0;

for (let x =0; x < numbers.length; x++) {
    cont += numbers[x];
}

media = (cont / numbers.length);
console.log("A média dos números é:", media);

/*---------------------------------------- /

//---------- EXERCÍCIO 4 ---------- 

if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

/*---------------------------------------- */

/*---------- EXERCÍCIO 5 ---------- 

let eMaior = 0;

for (let x =0; x < numbers.length; x++) {
    if (numbers[x] > eMaior) {
        eMaior = numbers[x];
    } 
}

console.log("O maior número da lista é:", eMaior);

/*---------------------------------------- */

/*---------- EXERCÍCIO 6 ---------- 

let impares = 0;

for (let x =0; x < numbers.length; x++) {
    if ((numbers[x] % 2) !== 0) {
        impares++;
    } 
}

if (!impares) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log("Existem", impares , "números ímpares na lista.");
}

/*---------------------------------------- */

//---------- EXERCÍCIO 7 ---------- 

/*
///MESMA FUNÇÃO PORÉM SEM O USO DO FOR////

let eMenor = numbers.sort(function(a, b){return a - b});
eMenor = numbers[0];

console.log(eMenor);
*/

/*
///MESMA FUNÇÃO PORÉM COM O USO DO FOR////
let eMenor = 999999;

for (let x =0; x < numbers.length; x++) {
    if (numbers[x] < eMenor) {
        eMenor = numbers[x];
    } 
}

console.log("O menor número da lista é:", eMenor);
*/
/*---------------------------------------- */

//---------- EXERCÍCIO 8 ---------- 

let ateVinteEcinco = [];

for (let x = 0; x < 25; x++) {
    ateVinteEcinco[x] = x + 1;
}

console.log("O resultado:", ateVinteEcinco);

/*---------------------------------------- */

/*---------- EXERCÍCIO 9 ---------- 

let divide = [];

for (let x = 0; x < 25; x++) {
    divide[x] = (ateVinteEcinco[x] / 2);
}

console.log("O resultado da divisão de cada um dos elementos por 2:", divide);

/*---------------------------------------- */