// Get the client
import mysql, { type RowDataPacket, type Connection  } from 'mysql2/promise';
import express from 'express';


const app = express()
// app.use(express.json())
//como criar uma rota no express?
app.get("/pessoas", async(req,res)=>{
  

  let connection:Connection | null = null
  // Create the connection to database
  try {
  const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'luademel',
});

// Using placeholders

  // const [dados, campos] = await connection.execute('SELECT * FROM pessoa')
  // const result = await connection.execute('INSERT INTO pessoa (id, nome) values (?, ?)', [3, "Marcelo"])
  // console.log(result)
  // console.log(dados);
  
  
  const [dados, campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
  res.status(200).json(dados)
} catch (err) {
  if (connection) {
    await (connection as Connection).end()
}
}


})
app.post("/pessoas", ()=>{
  
})

app.listen(8000, ()=>{
  console.log("Iniciando o servidor na porta 8000")
})

interface IPessoa extends RowDataPacket{
  id:number,
  nome:"string",
}
