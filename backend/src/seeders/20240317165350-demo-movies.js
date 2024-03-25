'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      title: 'The Matrix',
      year: 1999,
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Inception',
      year: 2010,
      genreId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {})
  }
};
