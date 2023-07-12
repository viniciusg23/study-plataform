import express from "express";
const router = express.Router();
import { create, getLesson } from "../controllers/lessonControllers";
import { auth } from "../controllers/adminController";


// router.get("/", method);

router.post("/create", auth, create);

router.get("/:id", getLesson);


export default router;