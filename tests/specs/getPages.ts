import { expect } from 'chai';
import supertest from 'supertest';
import { ENV } from '../env/manager';

const request = supertest(ENV.BASE_URL);

describe('page stub tests', () => {

    it('should fetch user with page number: 1', async () => {
        const response = await request.get('/api/users').query({ page: 1 });
        expect(response.statusCode).equal(200);
    });

    it('should fetch user with page number: 2', async () => {
        const response = await request.get('/api/users').query({ page: 2 });
        expect(response.statusCode).equal(200);
    });

});