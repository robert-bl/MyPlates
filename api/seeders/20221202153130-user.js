'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',
    [
      {
        username: 'CaptainCook',
        password: 'arg',
        image: null,
      },
      {
        username: 'MaryPopoff',
        password: 'mmm',
        image: null,
      },
      {
        username: 'AlphaBetSoup',
        password: 'abc',
        image: null,
      },
      {
        username: 'SendNoodles',
        password: 'ramen',
        image: null,
      },
      {
        username: 'Snackums',
        password: 'honeybun',
        image: null,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users',{},null)
   
  }
};
