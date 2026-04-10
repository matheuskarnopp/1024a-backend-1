import {type Response} from 'express'

class MysqlErrorHandle{
    constructor(readonly error: unknown, readonly res:Response){

    }
    ehErroMysql(error:unknown){
        if (error instanceof Error && 'code' in error) {
            return true
        }
        return false
    }
    verificaErroDB(){
        console.log(this.error)
        if (this.error instanceof Error && 'code' in this.error) {
            
        if (this.error.code === 'ECONNREFUSED' || this.error.code === 'EAI_AGAIN') {
            this.res.status(500).json({ mensagem: "ERRO: LIGUE O LARAGON e confira o usuário e senha da conexão" })
        } else if (this.error.code === 'ENOTFOUND') {
            this.res.status(500).json({ mensagem: "ERRO: Você digitou algo errado no host da conexão" })
        } else if (this.error.code === 'ER_BAD_DB_ERROR') {
            this.res.status(500).json({ mensagem: "ERRO: Confira o nome do banco de dados ou crie um banco com o nome que você passou na conexão" })
        } else if (this.error.code === 'ER_ACCESS_DENIED_ERROR') {
            this.res.status(500).json({ mensagem: "ERRO: Confira usuario e senha na conexão" })
        } else if (this.error.code === 'ER_PARSE_ERROR') {
            this.res.status(500).json({ mensagem: "ERRO: Você tem um erro na sua SQL, confira o Execute" })
        } else if (this.error.code === 'ER_NO_SUCH_TABLE') {
            this.res.status(500).json({ mensagem: "ERRO: Você digitou o nome da tabela errado, confira o Execute!" })
        }else if(this.error.code === ('ER_DUP_ENTRY')){
            this.res.status(500).json({ mensagem: "ERRO: Já exite um id cadastrado anteriormente no banco de dados" })
        }
        else {
            this.res.status(500).json({ mensagem: "ERRO: Desconhecido!" })
        }
        }


    }
}


export default MysqlErrorHandle