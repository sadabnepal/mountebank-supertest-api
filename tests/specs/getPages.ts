import { expect } from 'chai';
import supertest from 'supertest';
import { ENV } from '../env/manager';

const request = supertest(ENV.BASE_URL);

interface IUser {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

describe('page stub tests', () => {

    it('should fetch user with page number: 1', async () => {
        const response = await request.get('/api/users').query({ page: 1 });
        expect(response.statusCode).equal(200);
        expect(response.body.page).equal(1);
        expect(response.body.data).to.be.a('array');
        response.body.data.forEach((user: IUser) => {
            expect(user.id).not.to.be.null;
            expect(user.email).not.to.be.null;
            expect(user.first_name).not.to.be.null;
            expect(user.last_name).not.to.be.null;
            expect(user.avatar).not.to.be.null;
        });
    });

    it('should fetch user with page number: 2', async () => {
        const response = await request.get('/api/users').query({ page: 2 });
        expect(response.statusCode).equal(200);
        expect(response.body.page).equal(2);
        expect(response.body.data).to.be.a('array');
        response.body.data.forEach((user: IUser) => {
            expect(user.id).not.to.be.null;
            expect(user.email).not.to.be.null;
            expect(user.first_name).not.to.be.null;
            expect(user.last_name).not.to.be.null;
            expect(user.avatar).not.to.be.null;
        });
    });

});