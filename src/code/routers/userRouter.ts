import express from "express";
const router = express.Router();

import { register, login } from "../controllers/userControllers";
import { auth } from "../controllers/adminController";

router.post("/register", register);

router.post("/login", login, auth);



export default router;