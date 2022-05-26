"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, User }) {
      Subscription.belongsTo(Card, { foreignKey: "card_id" });
      Subscription.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Subscription.init(
    {
      user_id: {
        references: {
          model: "User",
          key: "id",
        },
        type: DataTypes.INTEGER,
      },
      card_id: {
        references: {
          model: "Card",
          key: "id",
        },
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Subscription",
    }
  );
  return Subscription;
};
