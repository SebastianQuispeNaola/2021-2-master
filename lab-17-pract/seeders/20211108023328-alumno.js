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
     await queryInterface.bulkInsert('Alumnos', [
       {
        codigo: "20210001",
        nombre: "Alumno 1",
        edad : 21,
        cursoId: 650022,
        createdAt: new Date(),
        updatedAt : new Date()
       },
       {
        codigo: "20210002",
        nombre: "Alumno 2",
        edad : 22,
        cursoId: 650022,
        createdAt: new Date(),
        updatedAt : new Date()
       },
       {
        codigo: "20210003",
        nombre: "Alumno 3",
        edad : 23,
        cursoId: 650022,
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
