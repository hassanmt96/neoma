'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Tasks', [
       
      {
  
        name: "Get ready for extravagant party",
        description: "Make sure to wear cologone",
        deadline: "2020-12-03",
        projectId: "1",
        createdAt: new Date(),
        updatedAt: new Date()

  },
      {
  
        name: "Get ready for extravagant party",
        description: "Make sure to wear cologone",
        deadline: "2020-12-03",
        projectId: "1",
        createdAt: new Date(),
        updatedAt: new Date()

  },
      {
  
        name: "Get ready for extravagant party",
        description: "Make sure to wear cologone",
        deadline: "2020-12-03",
        projectId: "1",
        createdAt: new Date(),
        updatedAt: new Date()

      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  
  }
};
