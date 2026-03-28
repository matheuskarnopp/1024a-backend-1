import { Router } from "express";

import mysql, {
  type RowDataPacket,
  type Connection,
  type ResultSetHeader,
} from "mysql2/promise";

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
    //TODO:
    console.log(err);
  }
});




routes.post("/pessoas", async (req, res) => {
  let { id, nome } = req.body;
  if (nome == null) {
    return res.status(500).json({mensagem: "Erro ao passar o nome "})
  }
  if (id == null) {
    return res.status(500).json({mensagem: "Erro ao passar o id "})
  }
  try {
    const [result] = await connection.execute<ResultSetHeader>(
    "INSERT INTO pessoa VALUES (?,?)",
    [id, nome],
  );
  
  if (result.affectedRows === 0) 
    return res.status(500).json({mensagem:"Erro ao inserir"})
  
  return res.status(201).json({ mensagem: "Sucesso ao inserir!" });

  } catch (err) {
    return res.status(500).json({mensagem:"Erro ao inserir", error:err})
  }


});

export default routes;
