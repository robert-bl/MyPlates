'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users','username',
    {
      type: Sequelize.DataTypes.STRING,
      unique:true
    }
    );
    await queryInterface.renameColumn('users','password','passwordDigest')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users','username',
    {
      type: Sequelize.DataTypes.STRING,
      unique:false
    }
    );
    await queryInterface.renameColumn('users','passwordDigest','password')
  }
};
