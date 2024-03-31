'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const movieGenresAssociations = [
      { movieId: 640146, genreId: 28 },
      { movieId: 640146, genreId: 12 },
      { movieId: 640146, genreId: 878 },
    ]

    await queryInterface.bulkInsert('MovieGenres', movieGenresAssociations.map(assoc => ({
      movieId: assoc.movieId,
      genreId: assoc.genreId,
      createdAt: new Date(),
      updatedAt: new Date()
    })), {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MovieGenres', null, {})
  }
};
