import { Router } from "express";
import productsController from "../controllers/productsController.js";
import { checkProductUsage } from "../middleware/checkUsageMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import { productValidation } from "../middleware/validationMiddleware.js";
const router = new Router();

router.get(
  "",
  roleMiddleware(["ADMIN", "USER"]),
  productsController.getAllProducts
);
router.post(
  "",
  roleMiddleware(["ADMIN", "USER"]),
  productValidation,
  productsController.addProduct
);
router.delete(
  "/:id",
  roleMiddleware(["ADMIN", "USER"]),
  checkProductUsage,
  productsController.deleteProduct
);
router.put(
  "",
  roleMiddleware(["ADMIN", "USER"]),
  productValidation,
  productsController.modifyProduct
);

export default router;
