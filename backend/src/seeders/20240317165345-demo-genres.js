'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Biography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Documentary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Family',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Film-Noir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'History',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Music',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Musical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sci-Fi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Short',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sport',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Superhero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'War',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Western',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {})
  }
};
