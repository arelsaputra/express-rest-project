const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement : true, unique: true },
    email: { type: Sequelize.STRING(100), primaryKey: true, allowNull: false},
    first_name: { type: Sequelize.STRING(100), allowNull: true},
    last_name: { type: Sequelize.STRING(100), allowNull: true},
}, {
    comment: "This is the table for all user",
    // If you want to use timestamps
    timestamps: true,
    // If you want to use existing database 
    // TODO Remember to put timestamps in schema
    freezeTableName: true,
    tableName: 'user',
});

module.exports = User;
