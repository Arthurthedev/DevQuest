const setas = document.querySelectorAll('.seta');
const textos = document.querySelectorAll('.novo-texto');

setas.forEach((seta, index) => {
  seta.addEventListener("click", () => {

    const jaEstaAberto = seta.classList.contains('vermelho');
 
    setas.forEach(seta => seta.classList.remove('vermelho'));
    textos.forEach(texto => texto.classList.remove('mostrar'));

    if (!jaEstaAberto) {
      seta.classList.add('vermelho');
      textos[index].classList.add('mostrar');
    }
   
  });
});
