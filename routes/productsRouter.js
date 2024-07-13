import { Router } from "express";
import productsController from "../controllers/productsController.js";
import checkProductUsage from "../middleware/checkProductUsage.js";
import validationMiddleware from "../middleware/productsValidationMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.get(
  "/get",
  roleMiddleware(["ADMIN"]),
  productsController.getAllProducts
);
router.post(
  "/add",
  roleMiddleware(["ADMIN"]),
  validationMiddleware,
  productsController.addProduct
);
router.delete(
  "/delete/:id",
  roleMiddleware(["ADMIN"]),
  checkProductUsage,
  productsController.deleteProduct
);
router.put(
  "/edit",
  roleMiddleware(["ADMIN"]),
  validationMiddleware,
  productsController.modifyProduct
);

export default router;
