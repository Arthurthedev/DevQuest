const button = document.getElementById('button') as HTMLButtonElement

button.addEventListener("click", (event)=>{
    const eventoDeClique = event as MouseEvent
    console.log(eventoDeClique);
    
})