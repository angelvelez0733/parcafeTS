import express, {Request, Response} from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 10240;


app.get("/", (request: Request, response: Response) => { 
    response.status(200).send("Hello World");
}); 

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
}).on("error", (err) => {
    throw new Error (err.message);
})