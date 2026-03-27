import { Router } from "express";

import mysql, { type RowDataPacket, type Connection } from "mysql2/promise";

const routes = Router();

////////////
interface IPessoa extends RowDataPacket {
  id: number;
  nome: "string";
}

////////////

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "luademel",
});
routes.get("/pessoas", async (req, res) => {
  try {
    const [dados, campos] = await connection.execute<IPessoa[]>(
      "SELECT * FROM pessoa",
    );
    res.status(200).json(dados);
  } catch (err) {
    if (connection) {
      await (connection as Connection).end();
    }
  }
});

routes.post("/pessoas", async(req,res) => {
  let {id,nome} = req.body
  const result =
    await connection
    .execute('INSERT INTO pessoa (id,nome) VALUES (?,?)',[3,"Maria"])
  console.log(result)
});

export default routes;
