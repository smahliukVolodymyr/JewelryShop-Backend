import { validationResult } from "express-validator";
import Material from "../models/Material.js";
class MaterialsController {
  async addMaterial(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(500)
          .json({ message: "Error adding material: ", errors });
      }
      const { name, pricePerGram } = req.body;
      const material = await Material.findOne({ name });
      if (material) {
        return res
          .status(400)
          .json({ message: `Material with name: ${name} already exists` });
      }
      const newMaterial = new Material({
        name,
        pricePerGram,
      });
      await newMaterial.save();
      res.json({ message: "Material was created" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error adding material" });
    }
  }

  async getMaterials(_, res) {
    try {
      const materials = await Material.find({});
      res.json(materials);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error getting materials" });
    }
  }

  async deleteMaterial(req, res) {
    try {
      const id = req.params.id;

      const deletedMaterial = await Material.findByIdAndDelete(id);
      if (!deletedMaterial) {
        return res.status(400).json({ message: "Material not found" });
      }
      res.json(deletedMaterial);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error deleting material" });
    }
  }

  async editMaterial(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(500)
          .json({ message: "Error editing material: ", errors });
      }
      const { _id, name, pricePerGram } = req.body;
      const updatedMaterial = await Material.findByIdAndUpdate(
        _id,
        { name, pricePerGram },
        { new: true }
      );

      if (!updatedMaterial) {
        return res.status(400).json({ message: "Material not found" });
      }
      res.json(updatedMaterial);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error editing material" });
    }
  }
}

export default new MaterialsController();
