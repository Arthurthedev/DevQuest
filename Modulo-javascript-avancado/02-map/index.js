let pessoas = [
    {nome: 'Arthur', idade: 20},
    {nome: 'Ricardo', idade:33},
    {nome: 'Roberto', idade:33},
    {nome: 'Gilson', idade: 40}
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
    
// }

// console.log(nomeDasPessoas);

let nomeDasPessoas = pessoas.map((pessoas)=> pessoas.nome + " tem " + pessoas.idade + " anos de idade")


console.log(nomeDasPessoas);

