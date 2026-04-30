import { create, read, update, deleteRecord } from '../config/database.js';

class ClienteModel {

    // Buscar todos os clientes
    static async listarTodos() {
        // TODO: Implementar a busca de todos os clientes
        // Dica: use a função read('clientes')
    }

    // Buscar cliente por ID
    static async buscarPorId(id) {
        // TODO: Implementar a busca por ID
        // Dica: use a função read('clientes', `id_cliente = ${id}`)
        //       e retorne apenas o primeiro resultado (rows[0])
    }

    // Criar novo cliente
    static async criar(dados) {
        // TODO: Implementar a criação do cliente
        // Dica: use a função create('clientes', dados)
        //       ela retorna o ID do registro inserido
    }

    // Atualizar cliente
    static async atualizar(id, dados) {
        // TODO: Implementar a atualização do cliente
        // Dica: use a função update('clientes', dados, `id_cliente = ${id}`)
    }

    // Excluir cliente
    static async excluir(id) {
        // TODO: Implementar a exclusão do cliente
        // Dica: use a função deleteRecord('clientes', `id_cliente = ${id}`)
    }
}

export default ClienteModel;
