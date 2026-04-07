function verificaErroDB(err: Error | unknown) {
    // esse if verifica se a mensagem é ENOTFOUND ou EAI_AGAIN, esse EAI_AGAIN, é um erro que só aconteceu na minha casa
    // não sei pq isso aconteceu em casa, mas eu pesquisei no chat e ele me disse que poderia ser esse erro, então eu coloquei e funcionou 
        if (err instanceof Error && 'code' in err && (err.code === 'ECONNREFUSED' || err.code === 'EAI_AGAIN')) {
            return { mensagem: "ERRO: LIGUE O LARAGON e confira o usuário e senha da conexão" }
        } else if (err instanceof Error && 'code' in err && err.code === 'ENOTFOUND') {
            return { mensagem: "ERRO: Você digitou algo errado no host da conexão" }
        } else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            return{ mensagem: "ERRO: Confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão" }
        } else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            return { mensagem: "ERRO: Confira usuario e senha na conexão" }
        } else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            return { mensagem: "ERRO: Você tem um erro na sua SQL, confira o Execute" }
        } else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            return { mensagem: "ERRO: Você digitou o nome da tabela errado, confira o Execute!" }
        } else {
            return { mensagem: "ERRO: Desconhecido!" }
        }
}

export default verificaErroDB