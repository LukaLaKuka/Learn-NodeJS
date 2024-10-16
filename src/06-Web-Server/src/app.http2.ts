import http2 from "node:http2";
import fs from "node:fs";
import path from "node:path";

async function main() {

    const publicFolder = path.resolve("./public");

    const server = http2.createSecureServer({
        key: fs.readFileSync(path.resolve(".", "keys", "server.key")),
        cert: fs.readFileSync(path.resolve(".","keys", "server.crt")),
    }, (req, res) => {
        console.log(req.url);

        let content;

        switch (req.url) {
            case "/":
                content = fs.readFileSync(path.join(publicFolder, "index.html"), "utf-8");
                res.writeHead(200, { "Content-Type": "text/html" });
                break;
            case "/css/style.css":
                content = fs.readFileSync(path.join(publicFolder, "css", "style.css"), "utf-8");
                res.writeHead(200, { "Content-Type": "text/css" });
                break;
            default:
                content = fs.readFileSync(path.join(publicFolder, "404.html"), "utf-8");
                res.writeHead(404, { "Content-Type": "text/html" });
                break;
        }

        res.end(content);
    });

    server.listen(3000);
    console.log("Server listening on https://localhost:3000");
}

main();