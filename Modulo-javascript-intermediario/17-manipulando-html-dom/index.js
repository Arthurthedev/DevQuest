function adicionarComentario() {
        let inputComentário = document.getElementsByName('novo-comentario');
        //console.log(inputComentário);
        let textoDigitado = inputComentário[0].value;

        let novosComentarios = document.getElementById('novos-comentarios');
        //novosComentarios.innerHTML =  novosComentarios.innerHTML + `<p>Novo comentário: <p> ${textoDigitado}`
        novosComentarios.innerHTML += `<p>Novo comentário: <p> ${textoDigitado}`

        
}

