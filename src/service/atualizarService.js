import validarBusca from "../validation/buscarIdValidation.js";
import validarCriacao from "../validation/notaValidation.js";
import { atualizar } from "../repository/diarioRepository.js";

export default async function atualizarService(id,dados){
    validarBusca(id)
    validarCriacao(dados.titulo, dados.conteudo, dados.data)

    let info = atualizar(id,dados)
    return info
}