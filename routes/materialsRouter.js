import { Router } from "express";
import materialsController from "../controllers/materialsController.js";
import { check } from "express-validator";

const router = new Router();

router.get("/get", materialsController.getMaterials);
router.post(
  "/add",
  [
    check("name", "Material name cannot be empty").notEmpty(),
    check("priceForGram", "Price for gram cannot be empty").notEmpty(),
  ],
  materialsController.addMaterial
);
router.delete("/delete/:id", materialsController.deleteMaterial);
router.put(
  "/modify",
  [
    check("name", "Material name cannot be empty").notEmpty(),
    check("priceForGram", "Price for gram cannot be empty").notEmpty(),
  ],
  materialsController.editMaterial
);

export default router;
