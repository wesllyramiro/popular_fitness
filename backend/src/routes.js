const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const ProfissionalController = require('./controllers/ProfissionalController');
const MensagensController = require('./controllers/MensagensController');

const routes = express.Router();

routes.post('/usuario', UsuarioController.create);

routes.post('/profissional', ProfissionalController.create);

routes.post('/Mensagem',MensagensController.create)
routes.get('/Mensagem',MensagensController.buscarPerguntaPorCategoria)
routes.get('/Mensagem/:usuario_id/',MensagensController.buscarPerguntasRealizadas)
routes.get('/Mensagem/:usuario_id/usuario',MensagensController.buscarResposta)

module.exports = routes;
