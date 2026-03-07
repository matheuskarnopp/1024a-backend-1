// Definindo a interface para o TypeScript saber o que esperar
interface Usuario {
    id: number;
    nome: string;
}

// Função que retorna uma Promise
const buscarUsuarioNoBanco = (id: number): Promise<Usuario> => {
    return new Promise((resolve, reject) => {
        console.log("Buscando usuário no banco...");

        // Simulando um atraso de 2 segundos (ex: rede lenta)
        setTimeout(() => {
            const sucesso = true; // Simulação de controle de erro

            if (sucesso) {
                resolve({ id: id, nome: "João Silva" }); // Sucesso!
            } else {
                reject("Erro ao conectar com o banco de dados."); // Falha!
            }
        }, 2000);
    });
};

// --- FORMA MODERNA DE USAR: Async/Await ---
async function executarTarefa() {
    try {
        const usuario = await buscarUsuarioNoBanco(1); // Espera a promessa resolver
        console.log(`Usuário encontrado: ${usuario.nome}`);
    } catch (error) {
        console.error(`Ops! Algo deu errado: ${error}`);
    }
}

executarTarefa();