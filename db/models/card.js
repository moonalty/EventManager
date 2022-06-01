const moment = require('moment')
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Subscription, Category }) {
      Card.belongsTo(User, { foreignKey: "user_id" });
      Card.belongsTo(Category, { foreignKey: "category_id" });
      Card.hasMany(Subscription, { foreignKey: "card_id" });
    }
  }
  Card.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      body: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      date_start: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('date_start')).format('DD/MM/YYYY h:mm')
        }
      },
      date_end: {
        type: DataTypes.DATE,
         get() {
           return moment(this.getDataValue('date_end')).format('DD/MM/YYYY h:mm')
         }
      },
      // time_start: {
      //   type: DataTypes.TEXT,
      // },
      // time_end: {
      //   type: DataTypes.TEXT,
      // },
      adress: {
        type: DataTypes.TEXT,
      },
      cost: {
        type: DataTypes.INTEGER,
      },
      people_count: {
        type: DataTypes.INTEGER,
      },
      org_link: {
        type: DataTypes.TEXT,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
      },
      user_id: {
        references: {
          model: "User",
          key: "id",
        },
        type: DataTypes.INTEGER,
      },
      category_id: {
        references: {
          model: "Category",
          key: "id",
        },
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
