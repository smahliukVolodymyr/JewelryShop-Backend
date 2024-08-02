import { Router } from "express";
import materialsController from "../controllers/materialsController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import { materialsValidation } from "../middleware/validationMiddleware.js";
import { checkMaterialUsage } from "../middleware/checkUsageMiddleware.js";
const router = new Router();

router.get(
  "",
  roleMiddleware(["USER", "ADMIN"]),
  materialsController.getMaterials
);
router.post(
  "",
  roleMiddleware(["USER", "ADMIN"]),
  materialsValidation,
  materialsController.addMaterial
);
router.delete(
  "/:id",
  roleMiddleware(["USER", "ADMIN"]),
  checkMaterialUsage,
  materialsController.deleteMaterial
);
router.put(
  "",
  roleMiddleware(["USER", "ADMIN"]),
  materialsValidation,
  materialsController.editMaterial
);

export default router;
