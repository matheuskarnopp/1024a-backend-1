// Get the client
import mysql, { type RowDataPacket, type Connection  } from 'mysql2/promise';
import express from 'express';


const app = express()
// app.use(express.json())
//como criar uma rota no express?


app.listen(8000, ()=>{
  console.log("Iniciando o servidor na porta 8000")
})


