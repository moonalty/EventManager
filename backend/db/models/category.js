"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card }) {
      Category.hasMany(Card, { foreignKey: "category_id" });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.TEXT,
      },
      // card_id: {
      //   type: DataTypes.INTEGER,
      // },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
