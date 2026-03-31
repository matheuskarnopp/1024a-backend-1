function veirificaErroDB(err: Error | unknown) {
    if (err instanceof Error && "code" in err && err.code === "ECONNREFUSED") {
        return { mensagem: "ERRO: LIGUE O LARAGON!", error: err.code };
    } else if (
        err instanceof Error &&
        "code" in err &&
        err.code === "ENOTFOUND"
    ) {
        return {
            mensagem: "ERRO: Você digitou algo errado no host da conexão",
            error: err.code,
        };
    } else if (
        err instanceof Error &&
        "code" in err &&
        err.code === "ER_BAD_DB_ERROR"
    ) {
        return {
            mensagem:
                "ERRO: confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão",
            error: err.code,
        };
    } else if (
        err instanceof Error &&
        "code" in err &&
        err.code === "ER_ACCES_DENIED_ERROR"
    ) {
        return {
            mensagem: "ERRO: Confira o usuário e senha da conexão",
            error: err.code,
        };
    } else if (
        err instanceof Error &&
        "code" in err &&
        err.code === "ER_PARSE_ERROR"
    ) {
        return {
            mensagem: "ERRO: Você tem um erro na sua SQL, confira o Execute",
            error: err.code,
        };
    } else if (
        err instanceof Error &&
        "code" in err &&
        err.code === "ER_NO_SUCH_TABLE"
    ) {
        return {
            mensagem:
                "ERRO: Você digitou o nome da tabela errado, confira o Execute!",
            error: err.code,
        };
    } else {
        return { mensagem: "ERRO: Desconhecido!" };
    }
}

export default veirificaErroDB