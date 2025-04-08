

 //ESCOPO DE BLOCO
// if(true){
//     const mensagem = "Olá!"
//     console.log(mensagem);
// }

// console.log(mensagem);
 //Nesse caso esta dando erro no segundo log pois o escopo da variavel mensagem esta sendo limitado ao IF


//ESCOPO DE BLOCO AUTOMONO
// {
//     const mensagem = "Olá!"
//     console.log(mensagem);
    
// }

// console.log(mensagem);
//ALERTA: ISSO NAO VALE PARA VARIAVEL VAR!!!!

//ESCOPO DE FUNÇÃO
// function falar(){
//     var mensagem = "Olá Mundo!"
//     console.log(mensagem);
    
// }

// falar()
// console.log(mensagem);
//Nesse caso, a variavel var fica dependente do escopo de função


function falar(){
        var mensagem = "Olá Mundo!"
         console.log(mensagem)
         function falarOutraCoisa(){
                
         }

         falarOutraCoisa()
         console.log(falarOutraCoisa);
         
        
     }

//ESCOPO GLOBAL
//CHECHAR INDEX,HTML
console.log(url);


