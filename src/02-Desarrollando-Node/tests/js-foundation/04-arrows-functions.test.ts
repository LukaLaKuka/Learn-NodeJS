import { findUser } from "../../src/js-foundation/04-arrows-functions";
import { User } from "../../src/js-foundation/03-callbacks";

describe('Arrow Functions Tests', () => {

    test('Should get an error', (done) => {
        const id = 4;
        findUser(id, (err?: string | null, user?: User) => {
            expect(err).toBe(`User not found with id: ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });

    test('Should get an User', (done) => {
        const id = 1;
        findUser(id, (err?: string | null, user?: User) => {
            expect(err).toBeNull();
            expect(user).toEqual({ id: 1, name: 'Luka' });
            done();
        })
    });
});