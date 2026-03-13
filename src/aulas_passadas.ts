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

async function devolveTere():Promise<string | null> { 
    const returnPromisse = new Promise<string | null>((resolve, reject) => {
        
        if (Math.random()>.5) {
            setTimeout(() => { resolve("Tere")}, 5000)
        }else{
            reject(null)
        }
       
    })
    return returnPromisse
}

try {
    const resultado = await devolveTere()
    console.log(resultado)    
} catch (erro) {
    console.log(erro)
}