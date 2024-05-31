'use strict';

const { UPDATE } = require('sequelize/lib/query-types');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'René Yahir',
        correoElectronico: 'rene.yahir.rodriguez.robledo@uabc.edu.mx',
        password: 'superpassword',
        boletin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {} )
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(' Usuarios', {}, {});
  }
};
