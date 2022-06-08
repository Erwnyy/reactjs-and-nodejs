import express from "express";
import { Register, Login, logout } from "../controllers/Auth.js";

const router = express.Router();

// router.post("/register", register)
// router.post("/login", login)

router.post("/register", Register)
router.post("/login", Login)
router.get("/logout", logout)


export default router