'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('recipes','description',
    {
      type:Sequelize.DataTypes.TEXT
    }
    );
    await queryInterface.changeColumn('recipes','directions',
    {
      type:Sequelize.DataTypes.TEXT
    }
    );
    await queryInterface.changeColumn('reviews','comment',
    {
      type:Sequelize.DataTypes.TEXT
    }
    );
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.changeColumn('recipes','description')
    {
      {
        type:Sequelize.DataTypes.STRING
      }
    };
    await queryInterface.changeColumn('recipes','directions')
    {
      {
        type:Sequelize.DataTypes.STRING
      }
    };
    await queryInterface.changeColumn('reviews','comment',
    {
      type:Sequelize.DataTypes.STRING
    }
    );
  }
};