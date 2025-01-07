import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express().use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT || 10240;


app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
}).on("error", (err) => {
    throw new Error (err.message);
})