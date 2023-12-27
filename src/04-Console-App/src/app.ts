import { ServerApp } from "./ServerApp";
import { yarg as argvs } from "./config/plugins/yargs.plugin";

// console.log(argvs);

(async () => {
    await main();
})();

async function main() {
    const { b: base, l: length, s: show, o: outputDir, n: filename } = argvs;
    ServerApp.run({ base, length, show, outputDir, filename });
}