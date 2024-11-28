import { excluir } from "../repository/diarioRepository.js";
import validarExclusao from "../validation/excluirValidation.js";

export default async function excluirService(id){
    validarExclusao(id)

    let resposta = excluir(id)
    return resposta
}