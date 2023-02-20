const { DataTypes } = require('sequelize');

/**
 * @param {sequelize} = Sequelize instance
 * @returns {User} entity
 */

module.exports = (sequelize) => {
    
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    var email = 'super.admin@email.com';

    User.findOne({
        where: {
            email
        }
    })
    .then(result => {

        if (!result) {
            User.create({
                firstName: 'Super',
                lastName: 'Admin',
                email,
                password: 'superadmin!',
                isAdmin: 1
            });
        }

    })

    return User;
}