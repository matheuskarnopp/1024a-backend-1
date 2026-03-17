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