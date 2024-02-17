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
            return true;
        } catch (err) {
            throw err;
        }
    }
}