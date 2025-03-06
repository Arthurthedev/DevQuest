function calcularFatorial(numero){
    let resultado = 1;

    for (let i = 1; i <= numero; i++){
            resultado = resultado * i;
    }
    return resultado;
}

function imprimirFatorial(numero){
    if(numero < 0){
            console.log("Não é possivel calcular o fatorial de um numero negativo")
    }else{
            const fatorial = calcularFatorial(numero);
            console.log("O fatorial de " + numero + " é " + fatorial)
}
}

const numero = 5;
    imprimirFatorial(numero);