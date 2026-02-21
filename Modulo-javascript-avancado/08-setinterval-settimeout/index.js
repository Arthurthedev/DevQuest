// O SET TIME OUT E SET TIME INTERVAL USANDO MILISEGUNDOS PARA FUNCIONAR, OU SEJA, SE EU QUERO QUE O INTERVALO SEJA
// 3 SEGUNDOS, EU PRECISO COLOCAR 3000

setTimeout(()=>{
    console.log("Essa mensagem aparece depois de 10 segundos com o site aberto");
}, 10000)

setInterval(() => {
    console.log("Essa mensagem aparece a cada 5 segundos");
}, 5000);