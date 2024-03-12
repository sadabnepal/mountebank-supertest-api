import supertest from 'supertest';
import { expect } from 'chai';
import { ENV } from '../env/manager';

const request = supertest(ENV.BASE_URL);

describe('create user stub tests', () => {

    it('should create user with payload', async () => {

        const payload = {
            username: 'john',
            role: 'tester'
        };

        const response = await request.post('/api/users').set({ 'Content-Type': 'application/json' }).send(payload);

        expect(response.statusCode).equal(201);
        expect(response.body).include(payload);
        expect(response.body.id).to.be.a('string');
        expect(response.body.createdAt).to.not.eq(null);
    });

    it('should create user with empty payload', async () => {
        const response = await request.post('/api/users').set({ 'Content-Type': 'application/json' }).send({});

        expect(response.statusCode).equal(201);
        expect(response.body.id).to.be.a('string');
        expect(response.body.createdAt).to.not.eq(null);
    });

    it('should not create user without payload', async () => {
        const response = await request.post('/api/users').set({ 'Content-Type': 'application/json' });

        expect(response.statusCode).equal(404);
    });
});