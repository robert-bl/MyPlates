'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
   
    static associate(models) {
  
      Recipe.belongsTo(models.User, { 
        foreignKey: 'user_id',
        as:'user',
        onDelete:'CASCADE',
        onUpdate:'CASCADE', })
      
      Recipe.hasMany(models.Review, { 
        foreignKey: 'recipe_id',
        as:'review',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',})
    }
  }
  Recipe.init({
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
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    directions: DataTypes.TEXT,
    ingredient1: DataTypes.STRING,
    ingredient2: DataTypes.STRING,
    ingredient3: DataTypes.STRING,
    ingredient4: DataTypes.STRING,
    ingredient5:DataTypes.STRING,
    ingredient6:DataTypes.STRING,
    ingredient7:DataTypes.STRING,
    ingredient8:DataTypes.STRING,
    ingredient9:DataTypes.STRING,
    ingredient10:DataTypes.STRING,
    ingredient11:DataTypes.STRING,
    ingredient12:DataTypes.STRING,
    ingredient13:DataTypes.STRING,
    ingredient14:DataTypes.STRING,
    ingredient15:DataTypes.STRING,
    ingredient16:DataTypes.STRING,
    ingredient17:DataTypes.STRING,
    ingredient18:DataTypes.STRING,
    ingredient19:DataTypes.STRING,
    ingredient20:DataTypes.STRING,
    measurement1:DataTypes.STRING,
    measurement2:DataTypes.STRING,
    measurement3:DataTypes.STRING,
    measurement4:DataTypes.STRING,
    measurement5:DataTypes.STRING,
    measurement6:DataTypes.STRING,
    measurement7:DataTypes.STRING,
    measurement8:DataTypes.STRING,
    measurement9:DataTypes.STRING,
    measurement10:DataTypes.STRING,
    measurement11:DataTypes.STRING,
    measurement12:DataTypes.STRING,
    measurement13:DataTypes.STRING,
    measurement14:DataTypes.STRING,
    measurement15:DataTypes.STRING,
    measurement16:DataTypes.STRING,
    measurement17:DataTypes.STRING,
    measurement18:DataTypes.STRING,
    measurement19:DataTypes.STRING,
    measurement20:DataTypes.STRING,
    image: DataTypes.BLOB,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes'
  });
  return Recipe;
};