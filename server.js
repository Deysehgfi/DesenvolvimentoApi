// const express = require('express')
import express from "express"

const PORT = 3333;
//cria um servidor 
const app = express()

//rota com method === get 
//rota , função de callbak com requisição e a resposta
app.get("/", (request, response)=>{
response.status(200).json({msg: "GET"})
//cabeçalho 200 retorna como objeto json com uma menssage

//post
app.post("/users", (request,response)=>{
    response.status(200).json({msg:"POST"})
}) 


//put
app.put("/users", (request,response)=>{
    response.status(200).json({msg:"PUT"})
})


app.patch("/users", (request,response)=>{
    response.status(200).json({msg:"PATCH"})
})

app.delete("/users", (request,response)=>{
    response.status(200).json({msg:"DELETE"})
})
})

//listar o o servidos
app.listen(PORT, ()=>{
    console.log("Servidor on PORT:" +PORT)
})