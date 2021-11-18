'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Pesos', [
      {
      tipo: "NOTA-1",
      peso: 4,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      tipo: "NOTA-2",
      peso: 6,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      tipo: "NOTA-3",
      peso: 4,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      tipo: "NOTA-4",
      peso: 6,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      tipo: "NOTA-5",
      peso: 7,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      tipo: "NOTA-6",
      peso: 3,
      createdAt: new Date(),
      updatedAt : new Date()
    }
  ], {});  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
