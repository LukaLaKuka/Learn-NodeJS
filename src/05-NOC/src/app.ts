import { ServerApp } from "./app/Presentation/ServerApp";
import { MongoDatabase } from "./data/mongo";
import { Configuration } from "./config/plugins/env.plugin";

(async () => {
    await main();
})();

async function main() {
    await MongoDatabase.connect({
        mongoUrl: Configuration.MONGO_URL,
        databaseName: Configuration.MONGO_DB_NAME
    });

    ServerApp.run();
}