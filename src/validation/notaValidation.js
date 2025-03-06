export default function validarNota(nota){
    if(!nota.titulo) throw new Error ("Titulo é obrigatório");
    if(!nota.conteudo) throw new Error ("Conteúdo é obrigatório");
    if(!nota.data) throw new Error ("Data é obrigatório");
}