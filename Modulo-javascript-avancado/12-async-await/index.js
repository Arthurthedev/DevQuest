// new Promise((resolve, reject)=>{

// })

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {   
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("Começando o processo de ferver a agua");
            resolve(true)
        }else{
            console.log("É necessario ligar o fogao e colocar a chaleira");
            
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

let passarCafe = (aguaFervida)=>{
    return new Promise((resolve) => {
        console.log("Passando o café");
        resolve(true)
    })
}

let tomarCafe = (CafePassado)=>{
    return new Promise((resolve) => {
        console.log(("Tomando o café"));
        resolve(true)
    })
}

let lavarXicara = (cafeTomado)=>{
    return new Promise((resolve) => {
        console.log("Lavando a xícara");
        resolve(true)
    })
}

// EXEMPLO COM THEN 
// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
// .then(passarCafe)
// .then(tomarCafe)
// .then(lavarXicara)

//EXEMPLO COM ASYNC E AWAIT 


async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if (xicaraLavada) {
        console.log("Ritual do café finalizado");
        
    }

}

iniciarProcessoDeFazerCafe()