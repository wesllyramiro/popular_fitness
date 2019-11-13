

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('profissional',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
      },
      nome:{
        type:Sequelize.STRING(200),
        allowNull:false
      },
	    cpf:{
        type:Sequelize.STRING(15),
        allowNull:false
      },
	    login:{
        type:Sequelize.STRING(200),
        allowNull:false
      },
	    password:{
        type:Sequelize.STRING(50),
        allowNull:false
      },
	    crn:{
        type:Sequelize.STRING(50),
        allowNull:true
      },
	    cref:{
        type:Sequelize.STRING(50),
        allowNull:true
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('profissional');
  }
};
