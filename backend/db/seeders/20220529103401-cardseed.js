"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "vasya",
          email: "vasya@google.ru",
          password: "123123",
          role: "User",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vasaya",
          email: "vasaya@google.ru",
          password: "123123",
          role: "User",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      await queryInterface.bulkInsert(
        "Categories",
        [
          {
            name: "fun",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      )
    );
  },
};
