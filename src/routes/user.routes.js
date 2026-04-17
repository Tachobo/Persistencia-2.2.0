import express from "express";
import { register, login } from "../controllers/user.controller.js";
import { userMiddleware } from "../middlewares/user.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { userSchema } from "../schemas/user.schema.js";

const userRouter = express.Router();

userRouter.post("/register", validateSchema(userSchema), register);
userRouter.post("/login", login);
userRouter.get("/profile", userMiddleware, (req, res) => {
  res.json({ message: "Perfil protegido", user: req.user });
});

export default userRouter;