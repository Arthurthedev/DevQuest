let nomeFilme = "Vingadores"
if(nomeFilme === "Vingadores"){
    console.log("É o filme dos vingadores")
}

let critico1 = 2
let critico2 = 6

if(nomeFilme === "Vingadores"){
    console.log("Nota", critico1 + critico2)
}else if(nomeFilme === "Superman"){
    console.log("É o filme do superman")
    console.log("Nota", critico2 - critico1)
}else{
    console.log("É outro filme")
}

//Existe outra maneira de escrever o IF se for uma condição simples, essa é 

//condição ? valor_se_verdadeiro : valor_se_falso;

nomeFilme === "Vingadores" ?  console.log("É o vingas") : console.log("Não é o vingas")