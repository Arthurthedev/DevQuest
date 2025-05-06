const slides = document.querySelectorAll('.carrosel');
let slideAtual = 0;


let setaFrente = document.querySelectorAll('.seta-avancar')
setaFrente.forEach(seta =>{
    seta.addEventListener('click', ()=>{
        if(slideAtual < slides.length - 1){
            slides[slideAtual].classList.remove("mostrar");
            slideAtual++;
            slides[slideAtual].classList.add("mostrar");
        }
    })
})


let setaTras = document.querySelectorAll('.seta-voltar')
setaTras.forEach(seta =>{
    seta.addEventListener('click', () => {
        if(slideAtual > 0){
            slides[slideAtual].classList.remove("mostrar");
            slideAtual--;   
            slides[slideAtual].classList.add("mostrar");
        }
    })
})
    

