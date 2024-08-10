const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db'); // Import the connection instance
const Conversations = require('./conversations');

const Messages = sequelize.define('Messages', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    conversationId: {
        type: DataTypes.INTEGER,
        references: {
            model: Conversations,
            key: 'id'
        }
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

// Messages.belongsTo(Conversations, {
//     as: 'conversation'
// });

module.exports = Messages;