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
     await queryInterface.bulkInsert('Cursos', [
       {
       codigo: 1523,
       nombre: 'Sistemas de Inteligencia Empresarial',
       ciclo: 7,
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
      codigo: 650018,
      nombre: 'Simulacion',
      ciclo: 7,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      codigo: 650019,
      nombre: 'Gestion de Operaciones',
      ciclo: 7,
      createdAt: new Date(),
      updatedAt : new Date()
    } ,
    {
      codigo: 650022,
      nombre: 'Programacion Web',
      ciclo: 7,
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
