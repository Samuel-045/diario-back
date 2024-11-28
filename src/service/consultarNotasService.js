import { lerNotas } from "../repository/diarioRepository.js";

export default async function consultarService() {
    let registros = await lerNotas();
    return registros;
}
