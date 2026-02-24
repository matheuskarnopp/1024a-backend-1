import express from "express";

let app = express()
app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Olá mundo")
    // return res.json({message: "Servidor Node + TS rodando com sucesso!"})
})

app.listen(3000, ()=>{
    console.log("🚀 Servidor online em http://localhost:3000")
})