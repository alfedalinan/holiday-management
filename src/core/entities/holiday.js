const { DataTypes } = require('sequelize');

/**
 * @param {sequelize} = Sequelize instance
 * @returns {Holiday} entity
 */

module.exports = (sequelize) => {
    
    var Holiday = sequelize.define('Holiday', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING
        }
    });

    return Holiday;
}