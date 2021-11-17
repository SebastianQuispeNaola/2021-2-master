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
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: "Alumno-100",
        codigo: "20210100",
        edad: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alumno-101",
        codigo: "20210101",
        edad: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alumno-102",
        codigo: "20210102",
        edad: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alumno-103",
        codigo: "20210103",
        edad: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      }            

    ], {})

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
