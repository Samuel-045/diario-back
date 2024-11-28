import { buscarId } from "../repository/diarioRepository.js";
import validarBusca from "../validation/buscarIdValidation.js";

export default async function buscaIdService(id) {
    validarBusca(id)

    let dados = await buscarId(id)
    return dados
}