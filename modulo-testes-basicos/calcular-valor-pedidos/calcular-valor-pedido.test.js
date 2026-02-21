const calcularValorPedido = require('./calcular-valor-pedido');

it('Não deve cobrar valor do frete para produtos acima de 500 merréis', ()=>{
    const meuPedido ={
    itens:[
        {nome: 'Arco encantado', valor: 2000},
        {nome: 'Entrega', valor: 100, entrega: true}
    ]
}
    const resultado = calcularValorPedido(meuPedido);
    expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando o valor dos produtos for menor do que 500 merréis', ()=>{
    const meuPedido ={
    itens:[
        {nome: 'Hamburguer', valor: 50},
        {nome: 'Entrega', valor: 20, entrega: true}
    ]
}
    const resultado = calcularValorPedido(meuPedido);
    expect(resultado).toBe(70)
})

it('deve cobrar valor do frete caso os produtos seja EXATAMENTE 500 merréis', ()=>{
    const meuPedido ={
    itens:[
        {nome: 'Escudo de prata', valor: 500},
        {nome: 'Entrega', valor: 100, entrega: true}
    ]
}
    const resultado = calcularValorPedido(meuPedido);
    expect(resultado).toBe(600)
})

//CASO SEJA OS ESTADOS DE RS OU SC, DEVE ACRESCENTAR UM VALOR DE 30% NA ENTREGA

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', ()=>{
    const meuPedidoComEstadoRS ={
    estado: 'RS',
    itens:[
        {nome: 'Escudo de prata', valor: 500},
        {nome: 'Entrega', valor: 100, entrega: true}
    ]
}

    const resultado = calcularValorPedido(meuPedidoComEstadoRS)
    expect(resultado).toBe(620)


})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', ()=>{
    const meuPedidoComEstadoSC ={
    estado: 'SC',
    itens:[
        {nome: 'Escudo de prata', valor: 500},
        {nome: 'Entrega', valor: 100, entrega: true}
    ]
}

    const resultado = calcularValorPedido(meuPedidoComEstadoSC)
    expect(resultado).toBe(620)


})

it('não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', ()=>{
    const meuPedidoComEstadoSP ={
    estado: 'SP',
    itens:[
        {nome: 'Escudo de prata', valor: 500},
        {nome: 'Entrega', valor: 100, entrega: true}
    ]
}

    const resultado = calcularValorPedido(meuPedidoComEstadoSP)
    expect(resultado).toBe(600)


})