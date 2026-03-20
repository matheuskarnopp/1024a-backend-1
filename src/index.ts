// Get the client
import mysql, { type RowDataPacket } from 'mysql2/promise';

interface IPessoa extends RowDataPacket{
  id:number,
  nome:"string",
}

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'luademel',
});

// Using placeholders
try {
  // const [dados, campos] = await connection.execute('SELECT * FROM pessoa')
  // const result = await connection.execute('INSERT INTO pessoa (id, nome) values (?, ?)', [3, "Marcelo"])
  // console.log(result)
  // console.log(dados);
  
  
  const [dados, campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
  console.log(dados[0])
  for (let i = 0; i < dados.length; i++) {
    const element = dados[i];
    console.log(element?.id,element?.nome)
  }
} catch (err) {
  console.log(err);
}

// Close the connection
await connection.end();