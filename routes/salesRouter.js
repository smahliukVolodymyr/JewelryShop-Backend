import { Router } from "express";
import salesController from "../controllers/salesController.js";
import validatiopnMiddleware from "../middleware/salesValidationMiddleware.js";
import countFinalPrice from "../middleware/countFinalPriceMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.get("/get", roleMiddleware(["USER", "ADMIN"]), salesController.getSales);
router.post(
  "/add",
  roleMiddleware(["USER", "ADMIN"]),
  validatiopnMiddleware,
  countFinalPrice,
  salesController.addSales
);
router.delete(
  "/delete/:id",
  roleMiddleware(["USER", "ADMIN"]),
  salesController.deleteSalesItem
);
router.put(
  "/edit",
  roleMiddleware(["USER", "ADMIN"]),
  validatiopnMiddleware,
  salesController.modifySalesItem
);

export default router;
