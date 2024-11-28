import con from "./connection.js";

export async function logar(pessoa) {
    const comando = `select userName , senha from login where userName = ? and senha = ?;`

    let [info] = await con.query(comando, [pessoa.nome , pessoa.senha])
    return info
}

export async function criarNota(nota) {
    const comando = `insert into Relatos(titulo,conteudo,dt_inclusao,id_login) values (?, ?, ?, 1);`

    let [info] = await con.query(comando, [nota.titulo , nota.conteudo, nota.data])

    return info.insertId
    
}

export async function buscarId(id){
    const comando = `select * from Relatos where id_relatos = ?`

    let [info] = await con.query(comando, [id])
    return info
}

export async function lerNotas(){
    const comando = `
        select * from Relatos
    `

    let [registros] = await con.query(comando);
    return registros;
}

export async function excluir(id) {
    const comando = `delete from Relatos where id_relatos = ?`

    let [info] = await con.query(comando,[id])
    return info;
}

export async function atualizar(id,dados) {
    const comando = `update Relatos set titulo = ? , conteudo = ? , dt_inclusao = ? where id_relatos = ?`

    let [info] = await con.query(comando,[dados.titulo , dados.conteudo, dados.data, id])
    return info
}