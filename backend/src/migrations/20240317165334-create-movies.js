'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: false, // Since we are using TMDb's movie ID, it's not auto-incrementing
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      vote_count: {
        type: Sequelize.INTEGER
      },
      video: {
        type: Sequelize.BOOLEAN
      },
      vote_average: {
        type: Sequelize.FLOAT
      },
      popularity: {
        type: Sequelize.FLOAT
      },
      poster_path: {
        type: Sequelize.STRING
      },
      original_language: {
        type: Sequelize.STRING
      },
      original_title: {
        type: Sequelize.STRING
      },
      backdrop_path: {
        type: Sequelize.STRING
      },
      adult: {
        type: Sequelize.BOOLEAN
      },
      overview: {
        type: Sequelize.TEXT
      },
      release_date: {
        type: Sequelize.DATEONLY // Use DATEONLY for just the date without time
      },
      genre_ids: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Movies')
  }
};
