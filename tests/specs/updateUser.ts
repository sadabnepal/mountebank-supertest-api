import supertest from 'supertest';
import { expect } from 'chai';
import { ENV } from '../env/manager';

const request = supertest(ENV.BASE_URL);

describe('update user stub tests', () => {

    it('should update user with complete payload', async () => {

        const payload = {
            username: 'john',
            role: 'tester'
        };

        const response = await request.put('/api/users/2').set({ 'Content-Type': 'application/json' }).send(payload);

        expect(response.statusCode).equal(200);
        expect(response.body).include(payload);
        expect(response.body.updatedAt).to.not.eq(null);
    });

    it('should update user with partial payload', async () => {
        const response = await request.put('/api/users/2').set({ 'Content-Type': 'application/json' }).send({});

        expect(response.statusCode).equal(200);
        expect(response.body.updatedAt).to.not.eq(null);
    });

    it('should not update user without payload', async () => {
        const response = await request.put('/api/users/2').set({ 'Content-Type': 'application/json' });

        expect(response.statusCode).equal(404);
    });
});