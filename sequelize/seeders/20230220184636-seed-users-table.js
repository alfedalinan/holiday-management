'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [{
      firstName: 'Super',
      lastName: 'Admin',
      email: 'super.admin@takehome.com',
      password: 'superadmin!',
      isAdmin: 1
    }
   ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
