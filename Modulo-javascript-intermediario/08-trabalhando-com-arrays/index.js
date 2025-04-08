let frutas = ["Banana", "Maça", "Laranja", "Pera"]


//PROPRIEDADE ANTIGA
// for(let i = 0; i < frutas.length; i++){
//     console.log(`Fruta: ${frutas[i]}`);
    
// }


//PROPRIEDADE FOREACH
// frutas.forEach(function(item, indice){
//     console.log(`Fruta ${indice}: ${item}`)
// })

//METODOS
//frutas.push("Manga") ADICIONA UM ITEM NO FINAL DO ARRAY
//frutas.unshift("morango") ADICIONA UM ITEM NO COMEÇO DO ARRAY 
//frutas.pop() RETIRA UM ITEM NO FINAL DO ARRAY
//frutas.shift() RETIRA UM ITEM NO COMEÇO DO ARRAY
let posicaoLaranja = frutas.indexOf("Laranja")
console.log(posicaoLaranja);
