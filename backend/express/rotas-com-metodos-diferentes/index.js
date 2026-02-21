const express = require('express');
const app = express()

app.get('/usuarios/:name', (req, res)=>{
    const name = req.params.name;
    res.send(`Esse é o perfil do usuario ${name}`)
})

app.put('/usuarios/:name', (req, res)=>{
    const name = req.params.name;
    res.send(`Esse é o perfil do usuario ${name} usando PUT`)
})

app.listen(3000, ()=>{
    console.log(`Servidor em execução na porta http://localhost:3000`);
    
})