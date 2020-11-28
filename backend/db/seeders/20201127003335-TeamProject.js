'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TeamProjects', [
      {
        name:"Host the afterparty",
        description: "look at the tasks",
        teamleadId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Host the house party",
        teamleadId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('TeamProjects', null, {});
 
  }
};
