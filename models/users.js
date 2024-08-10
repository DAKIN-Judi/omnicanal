const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db'); // Import the connection instance
const Conversations = require('./conversations');

const Users = sequelize.define('Users', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },


    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },


    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },

    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'conversations',
    timestamps: true
});

Users.hasMany(Conversations, {
    foreignKey: 'attribuateTo',
    as: 'conversations'
});

module.exports = Users;