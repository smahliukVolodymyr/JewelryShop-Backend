import { Router } from "express";
import productsController from "../controllers/productsController.js";
import checkProductUsage from "../middleware/checkProductUsageMiddleware.js";
import validationMiddleware from "../middleware/productsValidationMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.get(
  "/get",
  roleMiddleware(["ADMIN", "USER"]),
  productsController.getAllProducts
);
router.post(
  "/add",
  roleMiddleware(["ADMIN", "USER"]),
  validationMiddleware,
  productsController.addProduct
);
router.delete(
  "/delete/:id",
  roleMiddleware(["ADMIN", "USER"]),
  checkProductUsage,
  productsController.deleteProduct
);
router.put(
  "/edit",
  roleMiddleware(["ADMIN", "USER"]),
  validationMiddleware,
  productsController.modifyProduct
);

export default router;
