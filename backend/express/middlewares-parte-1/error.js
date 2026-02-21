const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    throw new Error('Deu ruim')
})

app.use((err, req, res, next)=>{
    res.status(500).send('ocorreu um erro!')
})
app.listen(3001, ()=>{
    console.log("Servidor em execução na porta http://localhost:3001");
    
})