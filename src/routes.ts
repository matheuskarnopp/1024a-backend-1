import { Router } from "express";

import mysql, {
  type RowDataPacket,
  type Connection,
  type ResultSetHeader,
} from "mysql2/promise";
import veirificaErroDB from "./service.js";

const routes = Router();

////////////
interface IPessoa extends RowDataPacket {
  id: number;
  nome: "string";
}

interface IProduto extends RowDataPacket{
  id:number,
  nome:string,
  categoria:string,
  preco:number,
  data_criacao:Date,
  data_modificacao:Date 
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
    let verificar = veirificaErroDB(err)
    res.status(500).json(verificar)
  }
});

routes.post("/pessoas", async (req, res) => {
  let { id, nome } = req.body;
  if (nome == null) {
    return res.status(500).json({ mensagem: "Erro ao passar o nome " });
  }
  if (id == null) {
    return res.status(500).json({ mensagem: "Erro ao passar o id " });
  }
  try {
    const [result] = await connection.execute<ResultSetHeader>(
      "INSERT INTO pessoa VALUES (?,?)",
      [id, nome],
    );
    if (result.affectedRows === 0)
      return res.status(500).json({ mensagem: "Erro ao inserir" });

    return res.status(201).json({ mensagem: "Sucesso ao inserir!" });
  } catch (err) {
    let verificar = veirificaErroDB(err)
    res.status(500).json(verificar)
  }
});


// Crie uma rota chamada `cadastro_produto` que eu possa enviar
// um JSON para cadastrar um novo produto no banco de dados
routes.post("/cadastro_produto", async(req,res)=>{
  const {id, nome, categoria, preco, data_criacao, data_moodificacao} = req.body
  try {
    const [result] = await connection.execute<ResultSetHeader>(
      "INSERT INTO produto VALUES (?,?,?,?,?,?)",
      [id, nome, categoria, preco, data_criacao, data_moodificacao],
    );
    if (result.affectedRows === 0) {
      res.status(500).json({mensagem:"Erro ao inserir o produto"})
    }
    res.status(201).json({mensagem:"Sucesso ao inserir o produto"})
  } catch (err) {
   let verificar = veirificaErroDB(err)
    res.status(500).json(verificar)
  }
})

routes.get("/listar_produtos", async(req,res)=>{
  try {
    const [dados, campos] = await connection.execute<IProduto[]>(
    "SELECT * FROM produto"
  )
  res.status(200).json({dados})
  } catch (err) {
    let verificar = veirificaErroDB(err)
    res.status(500).json(verificar)
  }
  
})

 // Crie uma rota chamada `listar_produtos_informatica` que retorne
 // todos os produtos da categoria informatica

routes.get("/listar_produtos_informatica", async(req,res)=>{
  try {
    const [dados, campos] = await connection.execute<IProduto[]>(
      "SELECT * FROM produto WHERE categoria = informatica"
    )
    res.status(200).json(dados)
  } catch (err) {
  let verificar = veirificaErroDB(err)
    res.status(500).json(verificar)
  }
})

// Crie uma rota chamada `listar_produtos_caros` que retorne os produtos
// que custem mais de R$: 100,00

routes.get("/listar_produtos_caros", async(req,res)=>{
  try {
    const [dados, campos] = await connection.execute<IProduto[]>(
      "SELECT * FROM produto WHERE preco > 100"
    )
  } catch (err) {
   let verificar = veirificaErroDB(err)
    res.status(500).json(verificar)
  }
})

export default routes;
