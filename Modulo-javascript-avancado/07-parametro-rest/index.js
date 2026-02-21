// function(a, b, ...args) {
//     //...
// }

function incentivarQuester(mensagemDeMotivacao, ...nomesQuesters) {
    nomesQuesters.map((nomeQuester)=>{
             console.log(`${mensagemDeMotivacao}, ${nomeQuester}`);
    })
    
}

incentivarQuester('Parabens por ter chegado ao modulo JS Avançado', 'Arthur', 'João', 'Pedro', 'Roberto')
