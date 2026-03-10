//Assincrona? 
// async function minhaPromessa():Promise<string> {
//     const prom = new Promise<string>((resolve, reject) => {
//         setTimeout(()=>reject("Tere erro"), 5000)
//     }) 
//     return prom
// }

import { rejects } from "node:assert"

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





async function devolveTere():Promise<string | null>{
    const promise = ne
    setTimeout(()=> rejects)
    return "a"
}






// // Definindo a interface para o TypeScript saber o que esperar
// interface Usuario {
//     id: number;
//     nome: string;
// }

// // Função que retorna uma Promise
// const buscarUsuarioNoBanco = (id: number): Promise<Usuario> => {
//     return new Promise((resolve, reject) => {
//         console.log("Buscando usuário no banco...");

//         // Simulando um atraso de 2 segundos (ex: rede lenta)
//         setTimeout(() => {
//             const sucesso = true; // Simulação de controle de erro

//             if (sucesso) {
//                 resolve({ id: id, nome: "João Silva" }); // Sucesso!
//             } else {
//                 reject("Erro ao conectar com o banco de dados."); // Falha!
//             }
//         }, 2000);
//     });
// };

// // --- FORMA MODERNA DE USAR: Async/Await ---
// async function executarTarefa() {
//     try {
//         const usuario = await buscarUsuarioNoBanco(1); // Espera a promessa resolver
//         console.log(`Usuário encontrado: ${usuario.nome}`);
//     } catch (error) {
//         console.error(`Ops! Algo deu errado: ${error}`);
//     }
// }

// executarTarefa();