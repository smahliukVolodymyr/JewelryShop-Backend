import { Router } from "express";
import authController from "../controllers/authController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import { authValidation } from "../middleware/validationMiddleware.js";

const router = new Router();

router.post("/registration", authValidation, authController.registration);

router.post("/login", authController.login);

router.get("/users", roleMiddleware(["ADMIN"]), authController.getUsers);

export default router;
