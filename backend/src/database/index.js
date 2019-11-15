const Sequeliza = require('sequelize')
const dbConfig = require('../config/database')

const connection = new Sequeliza(dbConfig)

const Usuario = require('../model/Usuario')
const Profissional = require('../model/Profissional')
const Mensagem = require('../model/Mensagens')

Usuario.init(connection)
Profissional.init(connection)
Mensagem.init(connection)

module.exports = connection