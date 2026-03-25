import { Router } from "express";

import mysql, { type RowDataPacket, type Connection } from 'mysql2/promise';

const routes = Router()



////////////
interface IPessoa extends RowDataPacket {
  id: number,
  nome: "string",
}

////////////


routes.get("/pessoas", async (req, res) => {
  //TODO:Fazer arquivo separado para a coneção de banco, mas usando a pool para a coneção 
  let connection: Connection | null = null
  // Create the connection to database
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'luademel',
    })
    const [dados, campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
    res.status(200).json(dados)
  }
  catch (err) {
    if (connection) {
      await (connection as Connection).end()
    }
  }

});


// routes.post("/pessoas", ()=>{

// })

export default routes