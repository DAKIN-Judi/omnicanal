const express = require('express');
const router = express.Router();
const Users = require('./../../models/users');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const generateBasicAuthDigest = (username, password) => {
    return Buffer.from(`${username}:${password}`).toString('base64');
};

router.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const user = await Users.findOne({ where: { username } });

        if (!user.dataValues) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const isMatch = password == user.dataValues.password;

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const authDigest = generateBasicAuthDigest(username, password);

        res.status(200).json({ authDigest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
});

module.exports = router;
