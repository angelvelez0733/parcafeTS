import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    queueLimit: 0,
    connectionLimit: 10
});

connection.getConnection((err, conn) => {
    if (err) {
        console.log("Error connecting to database: ", err);
        if (conn) {
            conn.release();
        }
        return;
    }
    console.log("Connected to database, OK");
});

export default connection.promise();