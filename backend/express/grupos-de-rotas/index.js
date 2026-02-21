const express = require("express")
const app = express()
const userRouter = require('./userRoutes.js')
const postRouter = require('./postRoutes.js')

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(3000, ()=>{
    console.log("Servidor iniciado na porta http://localhost:3000/");
    
})

