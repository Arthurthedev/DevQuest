const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.get('/about', (req, res)=>{
    res.send('About page')
})

app.get('/usuarios/:name', (req, res)=>{
    const name = req.params.name
    console.log(req.params);
    res.send(`Esse é o perfil do usuario ${name}`)
    
})
app.listen(3000, () => {
    console.log("Servidor em execução http://localhost:3000");

})