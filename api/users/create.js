const Users = require('../../models/users');
const auth = require('./../middlewares/auth');
const express = require('express');
const { validationResult, check } = require('express-validator');

const router = express.Router();


router.post(
    '/api/users/',
    async (req, res) => {

        const { first_name, last_name, username, password } = req.body;
        
        const user = await Users.create({
            first_name,
            last_name,
            username,
            password
        });

        console.log(user, user.dataValues);

        res.status(201).json({ status: 'success', message: 'User created', user: user.dataValues});
    });

module.exports = router;
