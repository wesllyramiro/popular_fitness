const Sequeliza = require('sequelize')
const dbConfig = require('../config/database')

const Usuario = require('../model/Usuario')
const Profissional = require('../model/Profissional')

const connection = new Sequeliza(dbConfig)

Usuario.init(connection)
Profissional.init(connection)

module.exports = connection