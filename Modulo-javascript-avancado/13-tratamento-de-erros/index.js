// new Promise((resolve, reject)=>{

// })

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente tipo booleano é aceito"

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Começando o processo de ferver a agua");
            resolve()
        } else {
            const mensagemDeErro = console.log("É necessario ligar o fogao e colocar a chaleira");
            reject(mensagemDeErro)
        }
    })
}

let chaleiraEstaNoFogao = 123123;
let fogaoEstaLigado = false;

let passarCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log("Passando o café");
        resolve(true)
    })
}

let tomarCafe = (CafePassado) => {
    return new Promise((resolve) => {
        console.log(("Tomando o café"));
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
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


async function iniciarProcessoDeFazerCafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
    }catch(error){
        console.log(error);
    }finally{
        console.log("Ritual do café finalizado");
    }
}

iniciarProcessoDeFazerCafe()