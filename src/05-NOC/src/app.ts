import { ServerApp } from "./app/Presentation/ServerApp";
import { Configuration } from "./config/plugins/env.plugin";

(async () => {
    await main();
})();

async function main() {
    // ServerApp.run();

    console.log(Configuration)
}