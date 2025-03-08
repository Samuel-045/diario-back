import con from "./connection.js";

export async function criarCadastro(pessoa){
    const comando = `insert into usuario(userEmail, userNamen,senha) values (?,?,?)`

    let info = await con.query(comando,[pessoa.email, pessoa.nome, pessoa.senha])
    return info
}

export async function logar(pessoa) {
    const comando = `select id_login from usuario where userName = ? and senha = ?;`

    let [info] = await con.query(comando, [pessoa.nome , pessoa.senha])
    if(info[0] == undefined){
        info = false
    }else{
        info = {
            "condicao" : true,
            "id" : info[0].id_login
        }
    }
    return info
}

export async function criarNota(nota) {
    const comando = `insert into Relatos(titulo,conteudo,dt_inclusao,id_login) values (?, ?, ?, ?);`

    let [info] = await con.query(comando, [nota.titulo , nota.conteudo, nota.data, nota.id])

    return info.insertId
}

export async function buscarId(id){
    const comando = `select * from Relatos where id_relatos = ?`

    let [info] = await con.query(comando, [id])
    return info
}

export async function lerNotas(id){
    const comando = `
        select * from Relatos where id_login = ? order by dt_inclusao desc
    `

    let [registros] = await con.query(comando, [id]);
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