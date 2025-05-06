// let jogo1 = {
//     nome: "Final Fantasy",
//     valor: 200,
//     nota: 10
// }

// let jogo2 = {
//     nome: "Fallout",
//     valor: 150,
//     nota: 7
// }

// let jogo3 = {
//     nome: "Fifa",
//     valor: 250,
//     nota: 2
// }

// let videoGame = {
//     nome: "Xbox",
//     valor: 3000,
//     jogos: [jogo1, jogo2, jogo3]
// }

// console.log(videoGame.jogos[2].nota);

// let jogo4 = {
//     nome: "Hallo",
//     valor: 120,
//     nota: 6.5
// }
// videoGame.jogos.push(jogo4)

// console.log(videoGame.jogos[3].nome);

// let videoGame = {
//     nome: "Xbox",
//     valor: 3000,
//     jogos: [
//         {
//             nome: "Final Fantasy",
//             valor: 200,
//             nota: 10
//         },
//         {
//             nome: "Fallout",
//             valor: 150,
//             nota: 7
//         },
//         {
//             nome: "Fifa",
//             valor: 250,
//             nota: 2
//         }
        
//     ]
// }

// console.log(videoGame.jogos[2].nome);

let cliente = {
    nome: "Arthur",
    dataCadastro: "01/02/2025",
    ultimoPedido: {
        produto: "Playstation",
        valor: 2800,
        jogos: [
            {nome: "God of War",
             dataLancamento: "20/04/2018"
            },
            {nome: "The Last of Us 2",
             dataLancamento: "19/06/2020"
            }
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[1].dataLancamento);
