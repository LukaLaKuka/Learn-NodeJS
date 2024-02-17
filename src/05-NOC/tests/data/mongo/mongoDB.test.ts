import mongoose from 'mongoose';
import { MongoDatabase } from '../../../src/data/mongo'

describe('MongoDB Init Tests Suit', () => {

    afterEach(() => {
        mongoose.connection.close();
    });

    test('should refuse to connect to MongoDB (invalid url)', async () => {
        try {
            const connected = await MongoDatabase.connect({
                databaseName: 'this_is_not_a_valid_database_name',
                mongoUrl: 'this_is_not_a_valid_url',
            });
        } catch (error) {
            expect(`${error}`).toContain(`Invalid scheme, expected connection string to start with "mongodb://"`);
        }
    });

    test('should connect to MongoDB', async () => {
        const connected = await MongoDatabase.connect({
            databaseName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!,
        });

        expect(connected).toEqual(true);
    });

});