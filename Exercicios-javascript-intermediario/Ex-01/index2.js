let botao = document.getElementById('botao')

let quadradoAzul = document.getElementsByClassName('azul')[0]

function trocarCor(){
    quadradoAzul.classList.remove('azul')
    quadradoAzul.classList.add('amarelo')
}

botao.addEventListener('click', trocarCor)