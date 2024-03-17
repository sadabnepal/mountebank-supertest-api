import supertest from 'supertest';
import { expect } from 'chai';
import { ENV } from '../env/manager';

const request = supertest(ENV.BASE_URL);

describe('register user stub tests', () => {

    it('should register user with complete payload', async () => {

        const payload = {
            email: 'eve.holt@reqres.in',
            password: 'tester@123'
        };

        const response = await request.post('/api/register').set({ 'Content-Type': 'application/json' }).send(payload);

        expect(response.statusCode).equal(200);
        expect(response.body.id).to.be.a('number');
        expect(response.body.token).to.not.eq(null);
        expect(response.body.token.length).equal(17);
    });

    it('should not register user with missing email', async () => {

        const payload = {
            password: 'tester@123'
        };

        const response = await request.post('/api/register').set({ 'Content-Type': 'application/json' }).send(payload);

        expect(response.statusCode).equal(400);
        expect(response.body.error).equal('Missing email or username');
    });

    it('should not register user with missing password', async () => {

        const payload = {
            email: 'john@test.com'
        };

        const response = await request.post('/api/register').set({ 'Content-Type': 'application/json' }).send(payload);

        expect(response.statusCode).equal(400);
        expect(response.body.error).equal('Missing password');
    });

    it('should not register user with empty payload', async () => {
        const response = await request.post('/api/register').set({ 'Content-Type': 'application/json' }).send({});

        expect(response.statusCode).equal(400);
        expect(response.body.error).equal('Missing email or username');
    });

    it('should not register user without payload', async () => {
        const response = await request.post('/api/register');

        expect(response.statusCode).equal(400);
        expect(response.body.error).equal('Missing email or username');
    });
});