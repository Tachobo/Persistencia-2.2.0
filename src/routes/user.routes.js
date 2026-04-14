import express from "express";
import { register, login } from "../controllers/user.controller.js";
import { userMiddleware } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", userMiddleware, (req, res) => {
  res.json({ message: "Perfil protegido", user: req.user });
});

export default userRouter;