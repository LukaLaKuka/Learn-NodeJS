import { ServerApp } from "./app/Presentation/ServerApp";

(async () => {
    await main();
})();

async function main() {
    ServerApp.run();
}