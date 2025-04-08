let resultado = (numero1, numero2) => {
    return numero1 + numero2
}
console.log(resultado(2, 3));




// function incentivo(nomePessoa = "Amigão"){
//     console.log(`Parabéns ${nomePessoa}, você chegou ao JS intermediário!`);
// }

// incentivo()




// const incentivo = (nomePessoa = "Amigão!") =>{
//     console.log(`Parabéns ${nomePessoa}, você chegou ao JS intermediário!`);
// }

// incentivo()

const incentivo = (nomePessoa = "Amigão!") => console.log(`Parabéns ${nomePessoa}, você chegou ao JS intermediário!`);


incentivo()