'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mensagens',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
      },
      usuario_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        references:{
          model:'usuario',
          key:'id'
        }
      },
      profissional_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        references:{
          model:'profissional',
          key:'id'
        }
      },
      mensagem:{
        type:Sequelize.STRING(1000),
        allowNull:false
      },
      resposta:{
        type:Sequelize.STRING(1000),
        allowNull:true
      },
      respondido:{
        type:Sequelize.BOOLEAN,
        allowNull:false
      },
      categoria:{
        type:Sequelize.STRING(200),
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
    return queryInterface.dropTable('mensagens');
  }
};
