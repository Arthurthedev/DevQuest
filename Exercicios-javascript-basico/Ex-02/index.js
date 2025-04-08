const boletoPago = true;

//nesse caso, como é uma verificaçaõ simples não é necessario escrever "boletoPago == true" no If para verificar, basta colocar o nome da variavel 
if(boletoPago === true){
    alert("O boleto está pago!");
}else if(boletoPago === false){

    alert("O boleto não está pago!");
}else{
    alert("Esse boleto é inválido!")
}