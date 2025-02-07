import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express().use(bodyParser.json());


//Imports users
import register from "./routes/users/user";
import auth from "./routes/auth";
import profile from "./routes/profile";
import update from "./routes/users/user";
import changePassword from './routes/users/user';
import uploadCv from "./routes/users/user";
import getAllAreasUser from "./routes/users/user";

//Imports admin
import createArea from "./routes/admin/admin";
import getAllAreas from "./routes/admin/admin";
import getAreasByStatus from "./routes/admin/admin";
import updateArea from "./routes/admin/admin";
import updateStatusArea from "./routes/admin/admin";
import createVacancy from "./routes/admin/admin";

dotenv.config();
const PORT = process.env.PORT || 10240;

app.use("/register", register);
app.use("/auth", auth);
app.use("/profile", profile);
app.use("/user", update);
app.use("/changePassword", changePassword);
app.use("/upload", uploadCv);
app.use("/user", getAllAreasUser);
app.use("/admin", createArea);
app.use("/admin", getAllAreas);
app.use("/admin", getAreasByStatus);
app.use("admin", updateArea);
app.use("/admin", updateStatusArea);
app.use("admin", createVacancy);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
}).on("error", (err) => {
    throw new Error (err.message);
})