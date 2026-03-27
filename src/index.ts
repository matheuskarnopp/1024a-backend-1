import express from 'express';
import rotas from "./routes.js";
const app = express()

// Fala para a aplicação qual arquivo ela deve usar para rotas
app.use(express.json())

// Fala para a aplicação que para as rotas do usuarios, deverá haver o prefixo '/usuarios' para depois haver 
// as outras rotas. Por exemplo, 'Login', será "/usuarios/login"
// app.use("/usuarios", rotasUsuarios)


app.use(rotas)
app.listen(8000, ()=>{
  console.log("Iniciando o servidor na porta 8000")
})