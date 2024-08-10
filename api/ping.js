const express = require('express');

const router = express.Router();

router.get(
    '/api/ping',
    async (req, res) => {

        res.status(200).json('PONG');

    });

module.exports = router;
