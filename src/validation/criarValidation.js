export default function validarCriacao(titulo,conteudo,data){
    if (!titulo) throw new Error ("Titulo é obrigatório");
    if (!conteudo) throw new Error ("Conteudo da nota é obrigatório");
    if (!data) throw new Error ("Data é obrigatório");
}