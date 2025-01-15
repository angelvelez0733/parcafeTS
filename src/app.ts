import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express().use(bodyParser.json());


//Imports 
import register from "./routes/users/user";
import auth from "./routes/auth";
import profile from "./routes/profile";
import update from "./routes/users/user";


dotenv.config();
const PORT = process.env.PORT || 10240;

app.use("/register", register);
app.use("/auth", auth);
app.use("/profile", profile);
app.use("/user", update);



app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
}).on("error", (err) => {
    throw new Error (err.message);
})