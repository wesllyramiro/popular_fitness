const { Model, DataTypes } = require('sequelize')
    
class Mensagens extends Model {
    static init(connection){
        super.init({
            usuario_id:DataTypes.INTEGER,
            profissional_id:DataTypes.INTEGER,
            mensagem:DataTypes.STRING(1000),
            resposta:DataTypes.STRING(1000),
            respondido:DataTypes.BOOLEAN,
            categoria:DataTypes.STRING(200)
        },{
            sequelize:connection,
            tableName:'profissional'
        })
    }

    static associate(models){
        this.belongsTo(models.Usuario,{ foreignKey: 'usuario_id' , as :'usuario' })
        this.belongsTo(models.Profissional,{ foreignKey: 'profissional_id' , as :'profissional' })
    }
}

module.exports = Mensagens