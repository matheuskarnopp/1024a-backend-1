// let numero:number = 10
// let palavra:string = "Algum texto"
// let bol:boolean = true

// let x:number | string = 10
// x = "guilherme"

// const vetor: number[] = [1,2,3,4,5]
// vetor[2] = 10
// vetor.push(6)
// const vetorString: string[] = ["a","b","ab"]


// type Pessoa = {
//     id?:number;
//     nome:string;
//     idade:number}

// const pessoa:Pessoa = {
//     id:1,
//     nome:"Guilherme",
//     idade:18,
// }
// const pessoa2:Pessoa = {
//     id:1,
//     nome:"Guilherme",
//     idade:18,
// }
// pessoa.nome = "Terezinho"


// const cloundVoador:any = [] 

// const potatoVoadora:undefined = undefined


// console.log(vetor, vetorString, pessoa)

// vetor = [5,6,7,8,9]

// function tereLindo(nome:string): void{
//     console.log(`${nome} Lindo :3`)
// }
// const func = tereLindo]
// func("Tere")

// const func = function tereLindo(nome:string): void{
//     console.log(`${nome} Lindo :3`)
// }
// func("Tere")


// const func = (nome: string): void => {
//   console.log(`${nome}`)
// };

// const func = (nome:string):string => `${nome} Lindo :3`
// func("Tere")

// function somaVetor(v:number[]):number{
//     let soma = 0
//     for (let i = 0; i < v.length; i++) {
//         soma = soma + v[i]!;
//     }
//     return soma
// }

// function somaVetor2(v:number[]):number {
//     const soma = v.reduce((prev,curr) => prev+curr,0)
//     return soma
// }

// const result = somaVetor([1,2,3])
// console.log(result)


// function somaPares(v:number[]):number{
//     let soma = 0
//     for (let i = 0; i < v.length; i++) {
//         if (v[i]! % 2 == 0) {
//          soma = soma + v[i]!
//         }
//     }
//     return soma
// }

// const resultados = somaPares([2,4,5,6,8,9])

// console.log(`A soma dos pares dá ${resultados}`)


// function mergeVetor(v1:number[], v2:number[]): number[] {
//     const v3 = v1.concat(v2)
//     return v3 
// }

// const results = mergeVetor([456], [789])

// console.log(results)



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

//Assincrona? 
// async function minhaPromessa():Promise<string> {
//     const prom = new Promise<string>((resolve, reject) => {
//         setTimeout(()=>reject("Tere erro"), 5000)
//     }) 
//     return prom
// }





// minhaPromessa()
// .then((valor)=> console.log(valor))
// .catch((erro)=>console.log(erro))
// console.log("Terminei a execução")

// try {
//     const resultado = await minhaPromessa()
//     console.log(resultado)    
// } catch (erro) {
//     console.log(erro)
// }


//Crie uma funcção que tenha 50% de chance de retornar tere 
//após 5 segundos ou a função devolve o valor null null
// function devolveTere()

// async function devolveTere():Promise<string | null> { 
//     const returnPromisse = new Promise<string | null>((resolve, reject) => {
        
//         if (Math.random()>.5) {
//             setTimeout(() => { resolve("Tere")}, 5000)
//         }else{
//             reject(null)
//         }
       
//     })
//     return returnPromisse
// }

// try {
//     const resultado = await devolveTere()
//     console.log(resultado)    
// } catch (erro) {
//     console.log(erro)
// }


// // const vetor:number[] = [1,2,3,4]
// const vetor:{id:number, nome:string,idade:number}[] = [
//     {id:1,nome:"tere",idade:32},
//     {id:2,nome:"Marcelo",idade:17},
//     {id:3,nome:"Joãozinho",idade:18},
// ]

// //find
// //const resultado = vetor.find((x) => x.idade >= 18)
// //console.log(resultado)
// // console.log(vetor.find((x) => x==5))

// //filter
// // const resultado2 = vetor.filter((x) => x.idade >= 18) 
// // console.log(resultado2)

// //map
// const resultado3 = vetor.map((x) => x.idade) 
// console.log(resultado3)