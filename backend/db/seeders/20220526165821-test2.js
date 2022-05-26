"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          title: "NEW YEAR!!",
          body: "Go Vegas!",
          image: "#",
          date_start: new Date(),
          date_end: new Date(),
          time_start: "17-00",
          time_end: "21-00",
          adress: "Кирочная 26",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "NEW YEAR!!",
          body: "Go Vegas!",
          image: "#",
          date_start: new Date(),
          date_end: new Date(),
          time_start: "17-00",
          time_end: "21-00",
          adress: "Кирочная 26",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "NEW YEAR!!",
          body: "Go Vegas!",
          image: "#",
          date_start: new Date(),
          date_end: new Date(),
          time_start: "17-00",
          time_end: "21-00",
          adress: "Кирочная 26",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "NEW YEAR!!",
          body: "Go Vegas!",
          image: "#",
          date_start: new Date(),
          date_end: new Date(),
          time_start: "17-00",
          time_end: "21-00",
          adress: "Кирочная 26",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          title: "MEDVEDI",
          body: "Go Vegas!",
          image: "#",
          date_start: new Date(),
          date_end: new Date(),
          time_start: "17-00",
          time_end: "21-00",
          adress: "Кирочная 26",
          cost: 300,
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
