const expect = require('chai').expect;
const request = require('supertest');
const express = require('express');
const sequelize = require('../database');
const userRoutes = require('../routes/UserRoutes');
const app = express().use(userRoutes);

describe('GET test for /user', () => {
    it('OK, return false with no result found', (done) => {
        request(app).get('/api/user/findByEmail?email=notexist@email.com').then((res) => {
            const body = res.body;
            expect(body.success).to.equal(false);
            expect(body.result).to.equal('Result not found!');
            done();
        }).catch((err) => done(err)) ;   
    });
})
