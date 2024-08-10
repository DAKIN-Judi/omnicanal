const Users = require("../../models/users");

const auth = async (req, res, next) => {

    const headers = req.headers['authorization'];

    if (!headers) {
        return res.status(401).json({ message: 'Authorization Header not found' });
    }

    const encodedCredentials = headers.split(' ')[1];
    const credentials = Buffer.from(encodedCredentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    const user = await Users.findOne({ where: { username } });

    if (user.dataValues.username === username && user.dataValues.password === password) {
        return next();
    } else {
        return res.status(401).json({ message: 'Invalid Credentials' });
    }
};

module.exports = auth;