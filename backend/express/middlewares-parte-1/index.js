const express = require('express');
const app = express();

app.use((req, res, next)=>{
    const isLogged = false;
    if (isLogged) {
        next()
    }else{
        res.status(401).send('Voce precisa estar logado para entrar nessa pagina')
    }
})

app.get('/', (req, res)=>{
    res.send('Voce esta logado, olá mundo!')
})

app.listen(3000, ()=>{
    console.log("Servidor em execução na porta http://localhost:3000");
    
})