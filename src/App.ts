require("dotenv").config();

import config from "config";
import db from "../config/db";
import path from "path";

import express from "express";
const app = express();
app.use(express.json());

import Logger from "../config/logger";

import morgamMiddleware from "./middleware/morganMiddleware";
app.use(morgamMiddleware);


app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


import userRouter from "./routers/userRouter";
app.use("/user", userRouter);

import lessonRouter from "./routers/lessonRouter";
app.use("/lesson", lessonRouter);

import moduleRouter from "./routers/moduleRouter";
app.use("/module", moduleRouter);








const port = config.get<string>("port");
app.listen(port, async () => {
    await db();
    Logger.info(`Server Running on ${port}`);
})