const express = require("express")
const userRouter = express.Router()

userRouter.get('/', (req, res)=>{
    res.send("Caiu na rota raiz de usuarios")
})

userRouter.get('/save', (req, res)=>{
    res.send("Caiu na rota save de usuarios")
})

module.exports = userRouter;
