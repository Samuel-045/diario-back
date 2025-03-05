import { lerNotas } from "../repository/diarioRepository.js";

export default async function consultarService(id) {
    let registros = await lerNotas(id);
    return registros;
}
