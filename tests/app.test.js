const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const request = require('supertest');
const app = require('../app');

const User = require('../models/user');

chai.use(chaiHttp);

describe('users-api', () => {
    it('POST /login', () => {
        request(app)
            .post('/login')
            .send({
                name: 'yash',
                email: 'yash@gmail.com',
                password: 'yash123'
            })
            .expect(200)
            .end((err, res) => { 
                if (err) {
                    return done(err);
                }
                else {
                    if()
                }
            });
    });
    it('POST /signup', () => {
        expect(true).toBe(true);
    });

});