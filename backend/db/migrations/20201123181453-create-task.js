'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT(500)
      },
      deadline: {
        allowNull: false,
        type: Sequelize.DATE
      },
      projectId: {
        allowNull: false,
        type: Sequelize.INTEGER, 
        references: {model: 'TeamProjects'}
      },
      creatorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users"}
      },
      completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      assignedtoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};