import { Router } from "express";
import materialsController from "../controllers/materialsController.js";
import checkMaterialUsage from "../middleware/checkMaterialUsageMiddleware.js";
import materialsValidationMiddleware from "../middleware/materialsValidationMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.get(
  "/get",
  roleMiddleware(["USER", "ADMIN"]),
  materialsController.getMaterials
);
router.post(
  "/add",
  roleMiddleware(["USER", "ADMIN"]),
  materialsValidationMiddleware,
  materialsController.addMaterial
);
router.delete(
  "/delete/:id",
  roleMiddleware(["USER", "ADMIN"]),
  checkMaterialUsage,
  materialsController.deleteMaterial
);
router.put(
  "/edit",
  roleMiddleware(["USER", "ADMIN"]),
  materialsValidationMiddleware,
  materialsController.editMaterial
);

export default router;
