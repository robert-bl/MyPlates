'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',
    [
      {
        username: 'CaptainCook',
        passwordDigest: 'arg',
        image: null,
      },
      {
        username: 'MaryPopoff',
        passwordDigest: 'mmm',
        image: null,
      },
      {
        username: 'AlphaBetSoup',
        passwordDigest: 'abc',
        image: null,
      },
      {
        username: 'SendNoodles',
        passwordDigest: 'ramen',
        image: null,
      },
      {
        username: 'Snackums',
        passwordDigest: 'honeybun',
        image: null,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users',{},null)
   
  }
};
