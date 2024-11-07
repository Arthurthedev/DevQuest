// function nomeDaFuncao(){
//     <bloco de execucao>
// }

// nome da funcao ()

// function incentivo(){
//     alert("Voce consegue Arthur, continue seguindo em frente")
// }
// incentivo()

function soma(numero1, numero2){
    return numero1 + numero2
}
let resultadoDaSoma = soma(1, 6)
console.log(resultadoDaSoma)

resultadoDaSoma = soma(resultadoDaSoma, 10) //17
console.log(resultadoDaSoma)

function incentivo(nome = " amigão"){
    alert("Voce consegue" + nome + ", continue seguindo em frente")
}
incentivo(" Arthur")