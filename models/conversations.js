const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db'); // Import the connection instance
const Users = require('./users');
const Reasons = require('./reasons');
const Messages = require('./messages');
const Hooks = require('./hooks');

const Conversations = sequelize.define('Conversations', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    attribuateTo: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },

    reasonId: {
        type: DataTypes.INTEGER,
        references: {
            model: Reasons,
            key: 'id'
        }
    },

    hook_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Hooks,
            key: 'id'
        }
    },

    status: {
        type: DataTypes.ENUM('created', 'affected', 'treatment', 'closed'),
        allowNull: false,
        defaultValue: 'created'
    },

    canal: {
        type: DataTypes.ENUM('sms', 'whatsapp', 'messenger', 'telegram'),
        allowNull: false,
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

    closeddAt: {
        type: DataTypes.DATE,
        allowNull: true
    },

    startedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },

}, {

    tableName: 'conversations',
    timestamps: true
});

Conversations.hasOne(Reasons, {
    as: 'reason'
});

// Conversations.hasMany(Messages, {
//     as: 'messages'
// })

// Conversations.belongsTo(Users, {
//     foreignKey: 'attribuateTo',
//     as: 'user'
// })

module.exports = Conversations;