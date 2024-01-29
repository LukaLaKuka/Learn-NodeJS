import mongoose from "mongoose";

interface ConnectionOptions {
    mongoUrl: string,
    databaseName: string,
}

export class MongoDatabase {

    public static async connect(options: ConnectionOptions) {
        const { mongoUrl, databaseName: dbName } = options;

        try {
            await mongoose.connect(mongoUrl, {
                dbName
            });

            console.log('Mongo connected succesfully')
        } catch (err) {
            console.error('Error connecting Mongo Database');
            throw err;
        }
    }
}