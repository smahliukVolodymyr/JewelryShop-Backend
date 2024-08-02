import { Router } from "express";
import salesController from "../controllers/salesController.js";
import countFinalPrice from "../middleware/countFinalPriceMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import { salesValidation } from "../middleware/validationMiddleware.js";
const router = new Router();

router.get("", roleMiddleware(["USER", "ADMIN"]), salesController.getSales);
router.post(
  "",
  roleMiddleware(["USER", "ADMIN"]),
  salesValidation,
  countFinalPrice,
  salesController.addSales
);
router.delete(
  "/:id",
  roleMiddleware(["USER", "ADMIN"]),
  salesController.deleteSalesItem
);
router.put(
  "",
  roleMiddleware(["USER", "ADMIN"]),
  salesValidation,
  salesController.modifySalesItem
);

export default router;
