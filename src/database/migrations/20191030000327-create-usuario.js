'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario',{
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
	    email:{
        type:Sequelize.STRING(200),
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
      return queryInterface.dropTable('usuario');
  }
};
