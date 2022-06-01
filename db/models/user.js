"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, Subscription }) {
      User.hasMany(Card, { foreignKey: "user_id" });
      User.hasMany(Subscription, { foreignKey: "card_id" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.TEXT,
      },
      password: {
        type: DataTypes.TEXT,
      },
      role: {
        type: DataTypes.TEXT,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
