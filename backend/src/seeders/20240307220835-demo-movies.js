'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      title: 'The Matrix',
      genre: 'Action',
      year: 1999,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Inception',
      genre: 'Science Fiction',
      year: 2010,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {})
  }
}
