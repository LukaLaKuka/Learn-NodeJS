import express from "express";

class Server {

    private app = express();

    async start() {
        this.app.use(express.static("public"));

        this.app.get('*', (req, res) => {
            res.redirect("/", 301);
        });

        this.app.listen(3000);
        console.log(`Listening on http://localhost:3000`);
    }
}

export { Server };