require("dotenv").config();

import config from "config";
import db from "../config/db";

import express from "express";
const app = express();
app.use(express.json());

import Logger from "../config/logger";

import morgamMiddleware from "./middleware/morganMiddleware";
app.use(morgamMiddleware);




import userRouter from "./routers/userRouter";
app.use("/user", userRouter);

import classRouter from "./routers/classRouter";
app.use("/class", classRouter);

import moduleRouter from "./routers/moduleRouter";
app.use("/module", moduleRouter);









const port = config.get<string>("port");
app.listen(port, async () => {
    await db();
    Logger.info(`Server Running on ${port}`);
})