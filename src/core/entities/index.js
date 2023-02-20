const sequelize = require('../../infrastructure/db/sequelize-pg');

// imports of defined entities
const userEntity = require('./user');
const holidayEntity = require('./holiday');
const userHolidayEntity = require('./user-holiday');

// initialization of repositories
const User = userEntity(sequelize);
const Holiday = holidayEntity(sequelize);
const UserHoliday = userHolidayEntity(sequelize);

User.hasMany(UserHoliday, { sourceKey: 'id', foreignKey: 'userId', as: 'userHolidays' });

module.exports = {
    User,
    Holiday,
    UserHoliday
};