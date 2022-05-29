"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
      },
      body: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.TEXT,
      },
      date_start: {
        type: Sequelize.DATE,
      },
      date_end: {
        type: Sequelize.DATE,
      },
      // time_start: {
      //   type: Sequelize.TEXT,
      // },
      // time_end: {
      //   type: Sequelize.TEXT,
      // },
      adress: {
        type: Sequelize.TEXT,
      },
      cost: {
        type: Sequelize.INTEGER,
      },
      people_count: {
        type: Sequelize.INTEGER,
      },
      org_link: {
        type: Sequelize.TEXT,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
      },
      user_id: {
        references: {
          model: "Users",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      category_id: {
        references: {
          model: "Categories",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cards");
  },
};
