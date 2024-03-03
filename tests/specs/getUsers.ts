import { expect } from 'chai';
import supertest from 'supertest';
import { ENV } from '../env/manager';

const request = supertest(ENV.BASE_URL);

describe('users stub tests', () => {

    const userIDs = [1, 2, 3, 4, 5];
    userIDs.forEach((userId: number) => {
        it('should fetch user with id: ' + userId, async () => {
            const response = await request.get('/api/users/' + userId);
            expect(response.statusCode).equal(200);
        });
    });

});