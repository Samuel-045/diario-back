import validarCadastro from "../validation/criarUserValidation.js"
import { criarCadastro,logar } from "../repository/diarioRepository.js";

export default async function criarUsuarioService(pessoa){
    validarCadastro(pessoa)

    let retorno = await criarCadastro(pessoa)

    return retorno
}