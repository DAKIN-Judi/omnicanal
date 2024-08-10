const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db');

const Conversations = sequelize.define('Conversations', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    attribuateTo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: true
    },

    reasonId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'reasons',
            key: 'id'
        },
        allowNull: true
    },

    hook_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'hooks',
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
        allowNull: false
    },

    attribuatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },

    closeddAt: {
        type: DataTypes.DATE,
        allowNull: true
    },

    startedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    tableName: 'conversations',
    timestamps: true
});

module.exports = Conversations;

// Conversations.hasOne(Reasons, {
//     as: 'reason'
// });

// Conversations.hasMany(Messages, {
//     as: 'messages'
// })

// Conversations.belongsTo(Users, {
//     foreignKey: 'attribuateTo',
//     as: 'user'
// })