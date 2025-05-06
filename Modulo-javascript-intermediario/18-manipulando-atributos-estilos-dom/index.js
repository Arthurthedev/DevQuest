function alterarCorDeFundoPrimeiroPost(){
    let puxarPosts = document.getElementsByClassName('post');
    let primeiroPost = puxarPosts[0];
    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFontedoSegundoPost(){
    let textoPosts = document.getElementsByClassName('texto-post')
    textoPosts[1].classList.add('fonte-grande')
}

function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino');
    let radioFeminino = document.getElementById('genero-feminino');
    if (genero === 'M') {
        radioMasculino.checked = true;
    }else if(genero === 'F'){
        radioFeminino.checked = true;
    }else{
        alert('Erro! Tipo de dado incorreto.')
    }
}