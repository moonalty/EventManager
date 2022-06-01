const moment = require('moment')
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
        get() {
          return moment(this.getDataValue('date_start')).format('DD/MM/YYYY h:mm')
        }
      },
      date_end: {
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue('date_end')).format('DD/MM/YYYY h:mm')
        }
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
