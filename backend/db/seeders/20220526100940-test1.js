"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "j@j.ru",
          password: "123",
          role: "admin",
          rating: 5,
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
          title: "John Doe's event",
          body: "Go Vegas!",
          image: "#",
          date_start: new Date(),
          date_end: new Date(),
          time_start: "17-00",
          time_end: "21-00",
          adress: "Кирочная 26",
          cost: 300,
          category: "Fun",
          people_count: 30,
          org_link: "govegas.com",
          is_active: true,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Subscriptions",
      [
        {
          user_id: 1,
          card_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
