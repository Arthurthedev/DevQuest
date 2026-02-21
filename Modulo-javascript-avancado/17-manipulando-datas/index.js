const dataAtual = new Date();

// const umDiaDepois = new Date(dataAtual);

// umDiaDepois.setDate(dataAtual.getDate() + 1);

// console.log(umDiaDepois);

// const umMesAtras = new Date(dataAtual);
// umMesAtras.setMonth(dataAtual.getMonth() - 1);

// console.log(umMesAtras);

const opções = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opções);
console.log(dataFormatada);
