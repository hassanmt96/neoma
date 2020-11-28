'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TeamMembers', [
      {teamId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      {teamId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TeamMembers', null, {});
  }
};
