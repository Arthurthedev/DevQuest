let quadrado = document.getElementsByClassName('quadrado')[0]
quadrado.addEventListener('click', ()=> {
        let classeAzulExiste = quadrado.classList.contains('azul')
        if(classeAzulExiste){
            quadrado.classList.remove('azul')
        }else{
            quadrado.classList.add('azul')
        }
})
