import consultar from "../service/consultarNotasService.js";
import loginServ from "../service/loginService.js";
import criarNota from "../service/criarNotaService.js";
import buscaIdService from "../service/buscaIdService.js";
import atualizar from "../service/atualizarService.js";
import excluir from "../service/excluirService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/', async (req, resp) => {
    try {
        let pessoa = req.body;
        
        let login = await loginServ(pessoa)
        resp.send(login)
    }
    catch(error){
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get("/notas", async(req,resp) =>{
    try{
        let registros = await consultar()
        resp.send(registros)

    }
    catch(error){
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get('/notas/:id', async (req,resp) =>{
    try{
        let id = req.url
        let idTratado = (id.split('/')[2])

        let dados = await buscaIdService(idTratado)
        resp.send(dados)
    }
    catch(error){
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.post('/notas/criar',async (req, resp) =>{
    try{
        let nota = req.body

        let id = await criarNota(nota)

        resp.send({
            novoId: id
        })
    }
    catch(error){
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.delete('/notas/excluir/:id', async(req,resp) =>{
    try{
        let id = req.url
        let idTratado = (id.split('/')[3])

        let resposta = await excluir(idTratado)
        resp.send(
            'Exclusão feita'
        )
    }
    catch(error){
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.post('/atualizar/:id', async (req,resp) =>{
    try{
        let id = req.url
        let idTratado = (id.split('/')[2])

        let dados = req.body
        let atualizacao = await atualizar(idTratado, dados)
        resp.send(
            'Alteração feita'
        )
    }
    catch(error){
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default endpoints;

