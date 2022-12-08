'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

      User.hasMany(models.Recipe, { 
        foreignKey: 'user_id',
        as:'recipe',
        onDelete:'CASCADE',
        onUpdate:'CASCADE', })
      User.hasMany(models.Review, { 
        foreignKey: 'user_id',
        as:'review',
        onDelete:'CASCADE',
        onUpdate:'CASCADE', })
    }
  }
  User.init({
    username:{
      type: DataTypes.STRING,
      unique: true
    },
    passwordDigest: DataTypes.STRING,
    image: DataTypes.BLOB,
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};