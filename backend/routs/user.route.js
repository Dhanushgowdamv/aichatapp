import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();

router.post(
  "/register",

  body("email").isEmail().withMessage("email must be valid address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be least 6 character long"),

  userController.createUserController
);

export default router;
