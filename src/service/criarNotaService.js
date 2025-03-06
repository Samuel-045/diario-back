import validarNota from "../validation/notaValidation.js";
import { criarNota } from "../repository/diarioRepository.js";

export default async function criarNotaService(nota) {
    validarNota(nota)

    let retorno = await criarNota(nota)
    return retorno
}