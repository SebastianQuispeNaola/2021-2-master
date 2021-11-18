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
     await queryInterface.bulkInsert('Nota', [
      {
       tipo : "NOTA-1",
       valor: "11",
       alumnoId: "20210001",
       createdAt: new Date(),
       updatedAt : new Date()
      },
      {
        tipo : "NOTA-2",
        valor: "12",
        alumnoId: "20210001",
        createdAt: new Date(),
        updatedAt : new Date()
       },
       {
        tipo : "NOTA-3",
        valor: "13",
        alumnoId: "20210001",
        createdAt: new Date(),
        updatedAt : new Date()
       },
       {
        tipo : "NOTA-4",
        valor: "14",
        alumnoId: "20210001",
        createdAt: new Date(),
        updatedAt : new Date()
       },
       {
        tipo : "NOTA-5",
        valor: "15",
        alumnoId: "20210001",
        createdAt: new Date(),
        updatedAt : new Date()
       },
       {
        tipo : "NOTA-6",
        valor: "16",
        alumnoId: "20210001",
        createdAt: new Date(),
        updatedAt : new Date()
       },

       {
        tipo : "NOTA-1",
        valor: "6",
        alumnoId: "20210002",
        createdAt: new Date(),
        updatedAt : new Date()
       },
       {
         tipo : "NOTA-2",
         valor: "7",
         alumnoId: "20210002",
         createdAt: new Date(),
         updatedAt : new Date()
        },
        {
         tipo : "NOTA-3",
         valor: "8",
         alumnoId: "20210002",
         createdAt: new Date(),
         updatedAt : new Date()
        },
        {
         tipo : "NOTA-4",
         valor: "9",
         alumnoId: "20210002",
         createdAt: new Date(),
         updatedAt : new Date()
        },
        {
         tipo : "NOTA-5",
         valor: "10",
         alumnoId: "20210002",
         createdAt: new Date(),
         updatedAt : new Date()
        },
        {
         tipo : "NOTA-6",
         valor: "11",
         alumnoId: "20210002",
         createdAt: new Date(),
         updatedAt : new Date()
        },
 
       
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
