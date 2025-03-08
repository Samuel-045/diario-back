export default function validarCadastro(pessoa){
    if (!pessoa.email) throw new Error ("Email do usuário é obrigatório");
    if (!pessoa.nome) throw new Error ("Nome de usuário é obrigatório");
    if (!pessoa.senha) throw new Error ("Senha do usuário é obrigatório");

}