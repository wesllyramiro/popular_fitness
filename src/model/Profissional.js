const { Model, DataTypes } = require('sequelize')
    
class Profissional extends Model {
    static init(connection){
        super.init({
            nome:DataTypes.STRING(200),
			email:DataTypes.STRING(200),
			login:DataTypes.STRING(200),
			password:DataTypes.STRING(50),
			crn:DataTypes.STRING(50),
			cref:DataTypes.STRING(50),
        },{
            sequelize:connection,
            tableName:'profissional'
        })
    }
}

module.exports = Profissional