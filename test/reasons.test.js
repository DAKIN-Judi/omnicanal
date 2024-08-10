const app = require('../server');
const assert = require('assert');
const request = require('supertest');

var userdigest;

describe('test hook', () => {

    it('must create basic connection digest to user', function (done) {
        this.timeout(5000);
        request(app)
            .post('/api/login')
            .send({
                username: 'dodo@test',
                password: 'password'
            })
            .then((response) => {

                console.log(response.body, 'response')

                userdigest = response.body.authDigest

                assert.strictEqual(response.statusCode, 201);
                assert.ok(response.body.hasOwnProperty('authDigest'), 'Response should contain "authDigest" key for user connection');
                assert.ok(response.body.authDigest != "", 'authDigest should not be empty');
                done();
            }).catch(done);
    });


    it('must create whatsapp hook', function (done) {
        this.timeout(5000);
        request(app)
            .post('/api/whatsapp')
            .set('Authorization',  'Basic ' + userdigest)
            .send({
                external_id: '165651651',
                message_body: "Bonjour. J'espère que vous allez bien"
            })
            .then((response) => {

                console.log(response.body)

                assert.strictEqual(response.statusCode, 200);
                // assert.ok(response.body.hasOwnProperty('token'), 'Response should contain "token" key for user connection');
                // assert.ok(response.body.token != "", 'Token should not be empty');
                done();
            }).catch(done);
    });

});