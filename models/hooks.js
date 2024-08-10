const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db'); // Import the connection instance

const Hooks = sequelize.define('Hooks', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    data: {
        type: DataTypes.JSONB,
        allowNull: false
    },

    external_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'hooks',
    timestamps: true
});

module.exports = Hooks;