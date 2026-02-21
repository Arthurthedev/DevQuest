const express = require('express')
const app = express()

app.use((req, res, next)=>{
    console.log(`Requisição recebida em ${new Date()}`);
    next()
})

app.get('/users', (req, res)=>{
    res.send('caiu na rota de usuarios');
    console.log('caiu na rota de usuarios');
})

app.get('/', (req, res)=>{
    res.send('caiu na rota raiz');
    console.log('caiu na rota raiz');
    
    
})

app.listen(3000, ()=>{
    console.log(`Servidor rodando na porta "http://localhost:3000/users"`);
    
})