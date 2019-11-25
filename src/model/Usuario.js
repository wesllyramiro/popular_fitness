const { Model, DataTypes } = require('sequelize')
    
class Usuario extends Model {
    static init(connection){
        super.init({
            nome:DataTypes.STRING(200),
			email:DataTypes.STRING(200),
			login:DataTypes.STRING(200),
			password:DataTypes.STRING(50)
        },{
            sequelize:connection,
            tableName:'usuario'
        })
    }
}

module.exports = Usuario