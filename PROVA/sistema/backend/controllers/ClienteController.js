import ClienteModel from '../models/ClienteModel.js';

class ClienteController {

    // GET /api/clientes - Listar todos os clientes
    static async listarTodos(req, res) {
        // TODO: Buscar todos os clientes no banco de dados
        // TODO: Retornar a lista com status 200
    }

    // GET /api/clientes/:id - Buscar cliente por ID
    static async buscarPorId(req, res) {
        // TODO: Obter o :id da URL → req.params.id
        // TODO: Buscar o cliente no banco de dados
        // TODO: Retornar 404 se não encontrado
        // TODO: Retornar o cliente com status 200 se encontrado
    }

    // POST /api/clientes - Cadastrar novo cliente
    static async criar(req, res) {
        // TODO: Obter os dados do body → req.body
        // TODO: Validar os campos obrigatórios (ex: nome, cpf_cnpj)
        // TODO: Criar o cliente no banco de dados
        // TODO: Retornar o cliente criado com status 201
    }

    // PUT /api/clientes/:id - Atualizar dados de um cliente
    static async atualizar(req, res) {
        // TODO: Obter o :id da URL e os dados do body
        // TODO: Verificar se o cliente existe (retornar 404 se não)
        // TODO: Atualizar os dados no banco de dados
        // TODO: Retornar confirmação com status 200
    }

    // DELETE /api/clientes/:id - Remover um cliente
    static async excluir(req, res) {
        // TODO: Obter o :id da URL
        // TODO: Verificar se o cliente existe (retornar 404 se não)
        // TODO: Excluir o cliente do banco de dados
        // TODO: Retornar confirmação com status 200
    }
}

export default ClienteController;
