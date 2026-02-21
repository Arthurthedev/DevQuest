const express = require("express")
const postRouter = express.Router()

postRouter.get('/', (req, res)=>{
    res.send("Caiu na rota raiz do post de usuarios")
})

postRouter.get('/save', (req, res)=>{
    res.send("Caiu na rota save do post de usuarios")
})

module.exports = postRouter;
