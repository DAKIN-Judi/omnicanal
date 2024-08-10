const express = require('express');
const dotenv = require('./utils/dotenv');
const sequelize = require('./databases/db');

const ping = require('./api/ping');
const createUser = require('./api/users/create');
const login = require('./api/middlewares/login');

const whatsappHook = require('./api/hooks/whatsapp')

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.static('public'));


app.use(ping);


// User
app.use(createUser);
app.use(login);


// Hook

app.use(whatsappHook);
// app.use(whatsappHook);
// app.use(whatsappHook);
// app.use(whatsappHook);

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(error => {
    console.error('Unable to sync database:', error);
  });

const PORT = process.env.PORT || 3001;
const ADDRESS = process.env.APP_URL || '0.0.0.0';

app.listen(PORT, ADDRESS, () => {
  console.log(`Serveur en écoute sur ${ADDRESS} le port ${PORT}`);
});

module.exports = app;
