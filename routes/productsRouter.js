import { Router } from "express";
import productsController from "../controllers/productsController.js";
import checkProductUsage from "../middleware/checkProductUsage.js";
import validationMiddleware from "../middleware/productsValidationMiddleware.js";

const router = new Router();

router.get("/get", productsController.getAllProducts);
router.post("/add", validationMiddleware, productsController.addProduct);
router.delete(
  "/delete/:id",
  checkProductUsage,
  productsController.deleteProduct
);
router.put("/edit", validationMiddleware, productsController.modifyProduct);

export default router;
