const nomeDoUsuario = prompt("Olá, qual o seu nome?")
//Nesse caso o const é a melhor opção, pois essa variável não sera reatribuida por nada depois 
if ( nomeDoUsuario === "") {
    alert("Você não inseriu um nome válido!");
} else {
    //alert("Seja Bem-Vindo(a) " + nomeDoUsuario + "!")
    alert(`Seja Bem-Vindo(a) ${nomeDoUsuario}!`);
}
