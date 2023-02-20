const { DataTypes } = require('sequelize');

/**
 * @param {sequelize} = Sequelize instance
 * @returns {UserHoliday} entity
 */

module.exports = (sequelize) => {
    
    var UserHoliday = sequelize.define('UserHoliday', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        holidayId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return UserHoliday;
}