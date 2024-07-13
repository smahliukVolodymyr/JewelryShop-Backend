import { Router } from "express";
import authRouter from "./authRouter.js";
import materialsRouter from "./materialsRouter.js";
import productsRouter from "./productsRouter.js";
import salesRouter from "./salesRouter.js";
const router = Router();

router.use("/auth", authRouter);
router.use("/materials", materialsRouter);
router.use("/products", productsRouter);
router.use("/sales", salesRouter);

export default router;
