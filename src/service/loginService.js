import { logar } from '../repository/diarioRepository.js'
import validar from '../validation/loginValidation.js'

export default async function loginService(pessoa) {
    validar(pessoa)

    let usuario = await logar(pessoa)
    return usuario
}