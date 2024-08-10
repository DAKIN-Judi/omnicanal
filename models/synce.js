const sequelize = require('./../databases/db');
const Users = require('./users');

const Hooks = require('./hooks');
const Conversations = require('./conversations');
const Reasons = require('./reasons');
const Messages = require('./messages');

// Define the order of model synchronization
const SyncDatabase = async () => {
  try {
    await Users.sync();
    console.log('Users table synced');

    await Hooks.sync();
    console.log('Hooks table synced');

    await Reasons.sync();
    console.log('Reasons table synced');

    await Conversations.sync();
    console.log('Conversations table synced');

    await Messages.sync();
    console.log('Messages table synced');

    console.log('All tables synced successfully');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
}

module.exports = SyncDatabase;