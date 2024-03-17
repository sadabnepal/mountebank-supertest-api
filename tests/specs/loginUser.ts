import supertest from 'supertest';
import { expect } from 'chai';
import { ENV } from '../env/manager';

const request = supertest(ENV.BASE_URL);

describe('login user stub tests', () => {

    it('should login user with valid payload', async () => {

        const payload = {
            email: 'eve.holt@reqres.in',
            password: 'tester@123'
        };

        const response = await request.post('/api/login').set({ 'Content-Type': 'application/json' }).send(payload);

        expect(response.statusCode).equal(200);
        expect(response.body.token).to.not.eq(null);
        expect(response.body.token.length).equal(17);
    });

    it('should not login user with missing email', async () => {

        const payload = {
            password: 'tester@123'
        };

        const response = await request.post('/api/login').set({ 'Content-Type': 'application/json' }).send(payload);

        expect(response.statusCode).equal(400);
        expect(response.body.error).equal('Missing email or username');
    });

    it('should not login user with missing password', async () => {

        const payload = {
            email: 'john@test.com'
        };

        const response = await request.post('/api/login').set({ 'Content-Type': 'application/json' }).send(payload);

        expect(response.statusCode).equal(400);
        expect(response.body.error).equal('Missing password');
    });

    it('should not login user with empty payload', async () => {
        const response = await request.post('/api/login').set({ 'Content-Type': 'application/json' }).send({});

        expect(response.statusCode).equal(400);
        expect(response.body.error).equal('Missing email or username');
    });

    it('should not login user without payload', async () => {
        const response = await request.post('/api/login');

        expect(response.statusCode).equal(400);
        expect(response.body.error).equal('Missing email or username');
    });
});