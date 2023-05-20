import express from "express";
const router = express.Router();

import { auth } from "../controllers/adminController";
import { create, addLesson, modulesIntro, getModule, moduleLessons } from "../controllers/moduleControllers";

// router.get("/", method);

router.post("/create", auth, create);

router.post("/add-lesson", auth, addLesson);

router.get("/all", modulesIntro);

router.get("/:id", getModule);

router.get("/:id/lessons", moduleLessons);


export default router;