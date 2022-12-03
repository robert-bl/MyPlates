'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.BLOB,
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};