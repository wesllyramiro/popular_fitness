const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

var connection = null

if (process.env.DATABASE_URL)
    connection = new Sequelize(process.env.DATABASE_URL,{
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true
        }
    })
else 
    connection = new Sequelize(dbConfig)

const Usuario = require('../model/Usuario')
const Profissional = require('../model/Profissional')
const Mensagem = require('../model/Mensagens')

Usuario.init(connection)
Profissional.init(connection)
Mensagem.init(connection)

module.exports = connection