import { criarCadastro } from "../repository/diarioRepository";
import validarCadastro from "../validation/cadastroUsuarioValidation";

export default async function criarUsuarioService(pessoa){
    validarCadastro(pessoa)

    let retorno = await criarCadastro(pessoa)
    return retorno
}