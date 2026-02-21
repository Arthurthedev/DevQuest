// new Promise((resolve, reject)=>{

// })

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {   
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("Começando o processo de ferver a agua");
            resolve()
        }else{
            console.log("É necessario ligar o fogao e colocar a chaleira");
            
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('Fazendo Café');
