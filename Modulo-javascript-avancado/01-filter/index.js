let pessoas = [
    {nome: 'Arthur', idade: 20},
    {nome: 'Ricardo', idade:33},
    {nome: 'Roberto', idade:33},
    {nome: 'Gilson', idade: 40}
]


//EXEMPLO SEM FILTRO 
// let pessoasComIdadeDe33Anos = []
// let pessoasQueNaoTem33Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if (pessoas[i].idade === 33) {
//         pessoasComIdadeDe33Anos.push(pessoas[i])
//     }else{
//         pessoasQueNaoTem33Anos.push(pessoas[i])
//     }
// }
// console.log(pessoasComIdadeDe33Anos);
// console.log(pessoasQueNaoTem33Anos);


let pessoasComIdadeDe33Anos = pessoas.filter((pessoa)=> pessoa.idade === 33)

console.log(pessoasComIdadeDe33Anos);

