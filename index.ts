import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import routes from "./src/app/routes"

const port = 8080;

createConnection()
    .then(() => {

        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(routes);

        app.listen(port, () => console.info(`started on http://localhost:${port}/api`));
    })
    .catch(error => console.error(error));