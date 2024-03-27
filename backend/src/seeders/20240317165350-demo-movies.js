'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      id: 500146,
      title: "Future Quest",
      vote_count: 1250,
      video: false,
      vote_average: 7.8,
      popularity: 5123.123,
      poster_path: "/futureQuest.jpg",
      original_language: "en",
      original_title: "Future Quest",
      backdrop_path: "/futureQuestBg.jpg",
      adult: false,
      overview: "A group of explorers venture into a mysterious black hole and discover an alternate universe on the brink of destruction.",
      release_date: "2023-05-20",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 800347,
      title: "The Lost Civilization",
      vote_count: 950,
      video: false,
      vote_average: 6.9,
      popularity: 4089.211,
      poster_path: "/lostCivilization.jpg",
      original_language: "en",
      original_title: "The Lost Civilization",
      backdrop_path: "/lostCivilizationBg.jpg",
      adult: false,
      overview: "An ancient map leads a professor and her team to the discovery of a civilization that time forgot.",
      release_date: "2023-06-11",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 204958,
      title: "Echoes of the Past",
      vote_count: 780,
      video: false,
      vote_average: 7.2,
      popularity: 3258.654,
      poster_path: "/echoesPast.jpg",
      original_language: "en",
      original_title: "Echoes of the Past",
      backdrop_path: "/echoesPastBg.jpg",
      adult: false,
      overview: "A historian's reality is shattered when she finds herself living in the era she studies.",
      release_date: "2023-04-15",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 345987,
      title: "Galaxy Defenders",
      vote_count: 1825,
      video: false,
      vote_average: 8.4,
      popularity: 6259.788,
      poster_path: "/galaxyDefenders.jpg",
      original_language: "en",
      original_title: "Galaxy Defenders",
      backdrop_path: "/galaxyDefendersBg.jpg",
      adult: false,
      overview: "A fleet of intergalactic protectors face their greatest challenge when an ancient alien threat reawakens.",
      release_date: "2023-07-22",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 640146,
      title: "Time Weaver",
      vote_count: 960,
      video: false,
      vote_average: 6.7,
      popularity: 3123.986,
      poster_path: "/timeWeaver.jpg",
      original_language: "en",
      original_title: "Time Weaver",
      backdrop_path: "/timeWeaverBg.jpg",
      adult: false,
      overview: "A young prodigy discovers her ability to manipulate time and must use her powers to save her town from impending doom.",
      release_date: "2023-08-09",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {})
  }
};
