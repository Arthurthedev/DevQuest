// new Promise((resolve, reject)=>{

// })

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {   
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("Começando o processo de ferver a agua");
            resolve(
            )
        }else{
            console.log("É necessario ligar o fogao e colocar a chaleira");
            
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false
let passarCafe = ()=>{
    console.log("Passando café!");
}
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('Fazendo Café');
