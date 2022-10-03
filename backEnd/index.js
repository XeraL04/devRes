import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import videoRoutes from "./routes/videos.js"
import articleRouter from "./routes/articles.js"

const app = express();
app.use(cors());

dotenv.config()

const connect = () =>{
    mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log(`Connected to the DB`)
    })
    .catch(
        err=>{throw err}
        );
}

app.use("/api", videoRoutes)
app.use("/api", articleRouter)

app.listen("5000",()=>{
    connect();
    console.log(`Connected to the server!`);
})
