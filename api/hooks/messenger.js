const { Hook } = require('mocha');
const Users = require('./../../models/users');
const auth = require('./../middlewares/auth');
const express = require('express');
const Hooks = require('./../../models/hooks');
const Conversations = require('./../../models/conversations');
const Messages = require('./../../models/messages');

const router = express.Router();


router.post(
    '/api/whatsapp/',
    auth,
    async (req, res) => {

        try {

            const { message_body, external_id } = req.body;

            var hook = await Hooks.create({
                external_id,
                data: req.body
            });

            console.log('check hook', hook);

            var conversation = await Conversations.create({
                hookId: hook.dataValues.id,
                status: 'created',
                canal: 'messenger',
                started_at: new Date()

            });

            console.log('check conversation', conversation);


            var message = await Messages.create({
                content: message_body,
                user_response: false,
                client_response: true,
                status: 'sent',
                conversationId: conversation.dataValues.id,
                level: 0
            });

            console.log('check message', message);

            res.status(201).json({ status: 'success', message, conversation, hook });

        } catch (error) {
            console.error('une erreur est survenu', error)
        }

    });

module.exports = router;