'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {

    static associate(models) {
   
      
      Review.belongsTo(models.User, { 
          foreignKey: 'user_id',
          as:'user',
          onDelete:'CASCADE',
          onUpdate:'CASCADE',})

      Review.belongsTo(models.Recipe, { 
        foreignKey: 'recipe_id',
        as:'review',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',})
    }
  }
  Review.init({
    userId:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'user_id',
      onDelete: 'CASCADE',
      references:{
        model:'users', 
        key:'id'
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'recipe_id',
      onDelete: 'CASCADE',
      references:{
        model:'users',
        key:'id'
    }
  },
    rating: DataTypes.FLOAT,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
  });
  return Review;
};