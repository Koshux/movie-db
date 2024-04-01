'use strict';

/** @type {import('sequelize-cli').Migration} */'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MovieGenres', [
      // Associations for "Godzilla x Kong: The New Empire"
      { movieId: 823464, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 823464, genreId: 878, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 823464, genreId: 12, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Kung Fu Panda 4"
      { movieId: 1011985, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1011985, genreId: 12, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1011985, genreId: 16, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1011985, genreId: 35, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1011985, genreId: 10751, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Road House"
      { movieId: 359410, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 359410, genreId: 53, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Madame Web"
      { movieId: 634492, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 634492, genreId: 14, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Creation of the Gods I: Kingdom of Storms"
      { movieId: 856289, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 856289, genreId: 14, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 856289, genreId: 10752, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Alienoid"
      { movieId: 601796, genreId: 878, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 601796, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 601796, genreId: 14, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 601796, genreId: 12, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Damsel"
      { movieId: 763215, genreId: 14, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 763215, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 763215, genreId: 12, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Sri Asih"
      { movieId: 624091, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 624091, genreId: 12, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 624091, genreId: 878, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 624091, genreId: 14, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 624091, genreId: 18, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "No Way Up"
      { movieId: 1096197, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1096197, genreId: 27, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1096197, genreId: 53, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "The Passion of the Christ"
      { movieId: 615, genreId: 18, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Migration"
      { movieId: 940551, genreId: 16, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 940551, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 940551, genreId: 12, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 940551, genreId: 35, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 940551, genreId: 10751, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Bullet Train Down"
      { movieId: 1006540, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1006540, genreId: 80, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1006540, genreId: 18, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1006540, genreId: 9648, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1006540, genreId: 878, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 1006540, genreId: 53, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Land of Bad"
      { movieId: 969492, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 969492, genreId: 53, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 969492, genreId: 10752, createdAt: new Date(), updatedAt: new Date() },
      // Associations for "Code 8 Part II"
      { movieId: 932420, genreId: 28, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 932420, genreId: 53, createdAt: new Date(), updatedAt: new Date() },
      { movieId: 932420, genreId: 80, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MovieGenres', null, {});
  }
};
