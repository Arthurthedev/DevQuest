const calcularAnoDeNascimento = (idade, mesDeNascimento, imprimir) => {
    const mesAtual = 4
    let anoDeNascimento = 2025 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => console.log(`Seu ano de nascimento é ${anoDeNascimento}`);

calcularAnoDeNascimento(20, 1, imprimirAnoDeNascimento)



// function dobrar(numero){
//     return numero * 2
// }

// function triplicar(numero){
//     return numero * 3
// }

// function quadruplicar(numero){
//     return numero * 4
// }


function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar= multiplicar(4)

console.log(dobrar(2));
console.log(triplicar(2));
console.log(quadruplicar(2));
