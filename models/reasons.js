const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db'); // Import the connection instance
const Conversations = require('./conversations');

const Reasons = sequelize.define('Reasons', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'reasons',
    timestamps: true
});

module.exports = Reasons;