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
          role: "Пользователь",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vasaya",
          email: "111@111",
          password: "12345678",
          role: "Организатор",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },
};
