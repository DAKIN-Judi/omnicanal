const { Sequelize } = require('sequelize');

try {
    
} catch (error) {
    
}
const sequelize = new Sequelize('omnicanale', 'root', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;