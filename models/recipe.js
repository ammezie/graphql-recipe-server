'use strict'
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  )
  Recipe.associate = function (models) {
    Recipe.belongsTo(models.User, { foreignKey: 'userId' })
  }
  return Recipe
}
