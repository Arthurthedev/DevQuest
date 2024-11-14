// function nomeDaFuncao(){
//     <bloco de execucao>
// }

// nome da funcao ()

// function incentivo(){
//     alert("Meu nome é Arthur, eu sou um progamador")
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
    alert("Meu nome é" + nome + ", eu sou um progamador")
}
incentivo(" Arthur")