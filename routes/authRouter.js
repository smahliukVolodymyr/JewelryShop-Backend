import { Router } from "express";
import authController from "../controllers/authController.js";
import { check } from "express-validator";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.post(
  "/registration",
  [
    check("username", "Username cannot be empty").notEmpty(),
    check(
      "password",
      "Password must be longer then 4 symbols and shorter then 10 symbols"
    ).isLength(4, 10),
  ],

  authController.registration
);
router.post("/login", authController.login);
router.get("/users", roleMiddleware(["ADMIN"]), authController.getUsers);

export default router;
