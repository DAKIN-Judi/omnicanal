const app = require('../server');
const assert = require('assert');
const request = require('supertest');


describe('test users', () => {

    it('must create users', function (done) {
        this.timeout(5000);
        request(app)
            .post('/api/users')
            .send({
                first_name: 'dodo',
                last_name: 'test',
                username: 'dodo@test',
                password: 'password'
            })
            .then((response) => {

                console.log(response.body)

                assert.strictEqual(response.statusCode, 201);
                
                done();
            }).catch(done);
    });

});