const express = require('express');
const dotenv = require('./utils/dotenv');

const ping = require('./api/default');

const scan = require('./api/mobile/ticketScan');

const generateTicket = require('./api/ticket/generate');

const downloadTicket = require('./api/ticket/download_receipt');

const dashboard = require('./api/dashboard/state');
const adminDashboard = require('./api/dashboard/admin_state');

const loginRoutes = require('./middleware/login');
const register = require('./middleware/register');

const userListe = require('./api/user/list');
const showUser = require('./api/user/show');
const updateUser = require('./api/user/update');

const roleListe = require('./api/role/roleList');
const createRole = require('./api/role/create');
const showRole = require('./api/role/show');
const updateRole = require('./api/role/update');

const ticketListe = require('./api/ticket/list');
const paidTicket = require('./api/ticket/paid');

const transactionList = require('./api/transaction/list');
const transactionwebhook = require('./api/transaction/webhook');
const payoutWebhook = require('./api/transaction/payoutWebhook');

const sendPasswordMail = require('./api/user/sendForgotPasswordMail');
const verifyPasswordResetMail = require('./api/user/paswordForgotVerification');

const createTicket = require('./api/ticket/create');
const showTicket = require('./api/ticket/show');

const donate = require('./api/donate/makeDonation');
const donationList = require('./api/donate/list');

const resetPassword = require('./api/user/resetPassword');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
  origin: true, 
  credentials: true
}));

app.use(express.static('public'));

app.use(downloadTicket);

app.use(generateTicket);

app.use(ping);

app.use(scan);

app.use(dashboard);
app.use(adminDashboard);

app.use(loginRoutes);
app.use(register);

app.use(userListe);
app.use(showUser);
app.use(updateUser);

app.use(roleListe);
app.use(createRole);
app.use(showRole);
app.use(updateRole);

app.use(ticketListe);
app.use(paidTicket);
app.use(createTicket);
app.use(showTicket);

app.use(donate);
app.use(donationList);

app.use(transactionList);
app.use(transactionwebhook);
app.use(payoutWebhook);

app.use(sendPasswordMail);
app.use(verifyPasswordResetMail);

app.use(resetPassword);

console.log('le port de api url: ' + process.env.API_URL);

const PORT = process.env.PORT || 3001;
const ADDRESS = process.env.APP_URL || '0.0.0.0';

app.listen(5000, ADDRESS, () => {
  console.log(`Serveur en écoute sur ${ADDRESS} le port ${PORT}`);
});

module.exports = app;
