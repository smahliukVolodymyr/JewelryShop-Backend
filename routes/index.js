import { Router } from "express";
import authRouter from "./authRouter.js";
import materialsRouter from "./materialsRouter.js";
import productsRouter from "./productsRouter.js";
const router = Router();

router.use("/auth", authRouter);
router.use("/materials", materialsRouter);
router.use("/products", productsRouter);

export default router;
