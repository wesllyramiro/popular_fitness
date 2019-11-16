const express = require('express');

const ProfissionalController = require('./controllers/ProfissionalController');
const MensagensController = require('./controllers/MensagensController');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.route('/usuario')
    .post(UsuarioController.CriarUsario)
routes.route('/usuario/:usuario_id')
    .get(UsuarioController.BuscarUsuario)


routes.route('/profissional')
    .post(ProfissionalController.CriarProfissional)
routes.route('/profissional/:profissional_id')
    .get(ProfissionalController.BuscarProfissional)


routes.route('/pergunta')
    .post(MensagensController.CriarPergunta)
    .get(MensagensController.BuscarPerguntaPorCategoria)
routes.route('/pergunta/:usuario_id')
    .get(MensagensController.BuscarPerguntasRealizadas)
    

routes.route('/resposta/:usuario_id')
    .post(MensagensController.CriarResposta)
    .get(MensagensController.BuscarResposta)

module.exports = routes;
