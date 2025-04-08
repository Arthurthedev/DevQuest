//Array.slice([inicio[,fim]])

let frutas = ["Banana", "Maçã", "Laranja", "Uva"]

// let frutasExtraidas = frutas.slice(1, 3)

// console.log(frutasExtraidas);

// let frutasExtraidas = frutas.splice(1, 2)

// console.log(frutasExtraidas);
// console.log(frutas);

let removeEAdicionaFrutas = frutas.splice(1, 2, "Goiaba", "Abacaxi", "Pera")

console.log(removeEAdicionaFrutas);
console.log(frutas);



