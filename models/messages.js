const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db');
const Conversations = require('./conversations'); // Import the Conversations model

const Messages = sequelize.define('Messages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    conversationId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'conversations', // Use the model reference directly
            key: 'id'
        }
    },

    content: {
        type: DataTypes.STRING,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM('pending', 'sent', 'read'),
        allowNull: false
    },

    level: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    user_response: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    client_response: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'messages',
    timestamps: true
});

Messages.belongsTo(Conversations, {
    foreignKey: 'conversationId', 
    as: 'conversation'
});

module.exports = Messages;
