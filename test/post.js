const expect = require('chai').expect;
const request = require('supertest');
const express = require('express');
const sequelize = require('../database');
const userRoutes = require('../routes/UserRoutes');
// json() and urlencoded() are essential for the request.post.send to work
// else the body to pass wil be null
const app = express()
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(userRoutes);

describe('POST test for /user', () => {
    it('OK, create user success', (done) => {
        request(app).post('/api/user/create').send({
            id: 1,
            email: "hey@tmail.com",
            first_name: "TEST",
            last_name: "test"
        }).then((res) => {
            const body = res.body;
            expect(body.result).to.contain.property('id');
            expect(body.result).to.contain.property('email');
            expect(body.result).to.contain.property('first_name');
            expect(body.result).to.contain.property('last_name');
            done();
        }).catch((err) => done(err));
    });
   
    it('Fail, email is required', (done) => {
        request(app).post('/api/user/create').send({
            id: 1,
            first_name: 'TEST',
            last_name: 'test'
        }).then((res) => {
            const body = res.body;
            expect(body.result.name).to.equal('SequelizeValidationError');
            done();
        }).catch((err) => done(err));
    });
})
