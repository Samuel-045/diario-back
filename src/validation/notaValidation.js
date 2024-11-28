export default async function validarNota(nota){
    if(!nota.titulo || nota.titulo=="") throw new Error ("Titulo é obrigatório");
    if(!nota.conteudo || nota.conteudo=="") throw new Error ("Conteúdo é obrigatório");
    if(!nota.data || nota.data=="") throw new Error ("Data é obrigatório");

}