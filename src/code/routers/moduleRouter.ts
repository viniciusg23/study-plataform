import express from "express";
const router = express.Router();

import { auth } from "../controllers/adminController";
import { create, addLesson } from "../controllers/moduleControllers";

// router.get("/", method);

router.post("/create", auth, create);

router.post("/add-lesson", auth, addLesson);


export default router;