'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      correoElectronico: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false

      },
      boletin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};