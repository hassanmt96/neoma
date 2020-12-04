'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

return queryInterface.bulkInsert('Projects', [{
  name: "Get ready for bed",
  description: "Sleep is for the weak",
  userId: 1,
  createdAt: new Date(),
  status: true,
  updatedAt: new Date(),
}], {});

},

  down: async (queryInterface, Sequelize) => {
    
   
   return queryInterface.bulkDelete('Projects', null, {});
  }
};
   /**
     * Add commands to revert seed here.
     *
     * Example:
     */
 