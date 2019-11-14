const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const ProfissionalController = require('./controllers/ProfissionalController');
const MensagensController = require('./controllers/MensagensController');

const routes = express.Router();

routes.post('/usuario', UsuarioController.create);

routes.post('/profissional', ProfissionalController.create);

routes.post('/mensagem',MensagensController.CriarPergunta)
routes.post('/mensagem/:usuario_id/resposta',MensagensController.CriarResposta)
routes.get('/mensagem',MensagensController.BuscarPerguntaPorCategoria)
routes.get('/mensagem/:usuario_id/',MensagensController.BuscarPerguntasRealizadas)
routes.get('/mensagem/:usuario_id/resposta',MensagensController.BuscarResposta)

module.exports = routes;
