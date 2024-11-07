// switch(parametro){
//case valor1 : 
//      <bloco de declaracao>
//      break
// case valor2 :
//      <bloco de declaracao>
//      break
//}

let nomeFilme = "Superman"

switch(nomeFilme){
    case "Vingadores": 
        console.log("É o Vingas")
        break
    case "Batman":
        console.log("É o batas")
        break
    case "Superman":
        console.log("é o supas")
        break
    default:
        console.log("Ai é paia, não é nenhum dos 3 filmes")
        break
}

let avaliacao = 1

switch(avaliacao){
    case 1:
    case 2:
        console.log("O filme é paia")
        break
    case 9:
    case 10:
        console.log("O filme é midia")
        break
    default:
        console.log("Não fede nem cheira")
        break
}