import dotenv from "dotenv";
dotenv.config();
import express from "express"
import bootstrap from "./bootstrap/bootstrap.js";

const app : express.Application = express();

const port : string | number = process.env.PORT || 5000;


bootstrap({app , express});



app.listen(port, () => {
    console.log("App listening on port", port);
})





