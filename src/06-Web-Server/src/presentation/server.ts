import express from "express";
import { Config } from "../config/envs";

class Server {

    private app = express();

    async start() {
        this.app.use(express.static("public"));

        this.app.get('*', (req, res) => {
            res.redirect(301, "/");
        });

        this.app.listen(Config.PORT);
        console.log(`Listening on http://localhost:${Config.PORT}`);
    }
}

export { Server };