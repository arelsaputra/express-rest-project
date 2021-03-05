const { Sequelize } = require('sequelize');
const sequelize = require('../database');

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - first_name
 *          - last_name
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: The email of the user
 *          first_name:
 *            type: string
 *            description: The first name of the user
 *          last_name:
 *            type: string
 *            description: The last name of the user
 *        example:
 *           email: example@email.com
 *           first_name: Charlie
 *           last_name: Charlie
 */
const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement : true, unique: true },
    email: { type: Sequelize.STRING(100), primaryKey: true, allowNull: false},
    first_name: { type: Sequelize.STRING(100), allowNull: true},
    last_name: { type: Sequelize.STRING(100), allowNull: true},
}, {
    comment: "This is the table for all user",
    // If you want to use timestamps
    timestamps: true,
    // TODO If you want to use existing database and tables 
    // remember to put timestamps in your schema (reference in db/init/00-database.sql)
    freezeTableName: true,
    tableName: 'user',
});

module.exports = User;
