import express from "express";
const router = express.Router();
import { create } from "../controllers/lessonControllers";
import { auth } from "../controllers/adminController";


// router.get("/", method);

router.post("/create", auth, create);


export default router;