let numero:number = 10
let palavra:string = "Algum texto"
let bol:boolean = true

let x:number | string = 10
x = "guilherme"

const vetor: number[] = [1,2,3,4,5]
vetor[2] = 10
vetor.push(6)
const vetorString: string[] = ["a","b","ab"]


type Pessoa = {
    id?:number;
    nome:string;
    idade:number}

const pessoa:Pessoa = {
    id:1,
    nome:"Guilherme",
    idade:18,
}
const pessoa2:Pessoa = {
    id:1,
    nome:"Guilherme",
    idade:18,
}
pessoa.nome = "Terezinho"


const cloundVoador:any = [] 

const potatoVoadora:undefined = undefined


console.log(vetor, vetorString, pessoa)













// vetor = [5,6,7,8,9]

// import express from "express";

// let app = express()
// app.use(express.json())

// app.get("/", (req,res) =>{
//     res.send("Olá mundo")
//     // return res.json({message: "Servidor Node + TS rodando com sucesso!"})
// })

// app.listen(3000, ()=>{
//     console.log("🚀 Servidor online em http://localhost:3000")
// })