import "reflect-metadata";
import express from "express";
import { connectionSource } from "./database/ormconfig";
import { routes } from "./routes";

const app = express();
const port = 3000;

connectionSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    })

app.use(express.json());
app.use(routes);

 app.listen(port, () => console.log(`Server is running in http://localhost:${port}`));