export default function validarLogin(pessoa){
    if (!pessoa.nome) throw new Error ("Nome de usuário é obrigatório");
    if (!pessoa.senha) throw new Error ("Senha do usuário é obrigatório");
}