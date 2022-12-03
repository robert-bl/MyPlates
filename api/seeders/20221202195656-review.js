'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('reviews',
    [
      {
        user_id:1,
        recipe_id:2,
        rating:null,
        comment:``
      },
      {
        user_id:1,
        recipe_id:3,
        rating:5,
        comment:`bussin`
      },
      {
        user_id:2,
        recipe_id:3,
        rating:4,
        comment:`Needs more butter`
      },
      {
        user_id:2,
        recipe_id:4,
        rating:4,
        comment:`Needs more butter`
      },
      {
        user_id:2,
        recipe_id:5,
        rating:5,
        comment:`Maybe too much butter`
      },
      {
        user_id:4,
        recipe_id:3,
        rating:null,
        comment:`Too scrumptous`
      },
      {
        user_id:4,
        recipe_id:5,
        rating:null,
        comment:`Finger licking good`
      },
      {
        user_id:5,
        recipe_id:3,
        rating:5,
        comment:``
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reviews',{},null)
  }
};
