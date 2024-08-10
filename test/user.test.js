const app = require('../server');
const assert = require('assert');
const request = require('supertest');


describe('test users element', () => {

    it('must return connection token', function (done) {
        this.timeout(5000);
        request(app)
            .post('/api/login')
            .send({
                email: 'd.j.bidossessi@gmail.com',
                password: 'password'
            })
            .then((response) => {

                requestToken = response.body.token;
                assert.strictEqual(response.statusCode, 200);
                assert.ok(response.body.hasOwnProperty('token'), 'Response should contain "token" key for user connection');
                assert.ok(response.body.token != "", 'Token should not be empty');
                done();
            }).catch(done);
    });

});