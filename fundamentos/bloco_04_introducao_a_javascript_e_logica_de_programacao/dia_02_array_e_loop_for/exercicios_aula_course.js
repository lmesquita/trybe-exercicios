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

//---------- EXERCÍCIO 3 ---------- 
let cont =0;
let media = 0;

for (let x =0; x < numbers.length; x++) {
    cont += numbers[x];
}

media = (cont / numbers.length);
console.log("A média dos números é:", media);

/*---------------------------------------- */