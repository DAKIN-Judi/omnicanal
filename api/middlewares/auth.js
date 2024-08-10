const auth = (req, res, next) => {

    const headers = req.headers['authorization'];
    if (!headers) {
        return res.status(401).json({ message: 'Authorization Header not found' });
    }

    const encodedCredentials = headers.split(' ')[1];
    const credentials = Buffer.from(encodedCredentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    const user = 'user'; // get user from db

    if (user.name === username && user.password === password) {
        return next();
    } else {
        return res.status(401).json({ message: 'Invalid Credentials' });
    }
};

module.exports = auth;