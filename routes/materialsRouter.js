import { Router } from "express";
import materialsController from "../controllers/materialsController.js";
import checkMaterialUsage from "../middleware/checkMaterialUsage.js";
import materialsValidationMiddleware from "../middleware/materialsValidationMiddleware.js";

const router = new Router();

router.get("/get", materialsController.getMaterials);
router.post(
  "/add",
  materialsValidationMiddleware,
  materialsController.addMaterial
);
router.delete(
  "/delete/:id",
  checkMaterialUsage,
  materialsController.deleteMaterial
);
router.put(
  "/edit",
  materialsValidationMiddleware,
  materialsController.editMaterial
);

export default router;
