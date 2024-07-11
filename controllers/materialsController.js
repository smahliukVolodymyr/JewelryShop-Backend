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
      res.json({ message: "Material was created" });
      newMaterial.save();
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
      res.status(500).json({ message: "Error getting materials" });
    }
  }

  async deleteMaterial(req, res) {
    try {
      const id = req.params.id;

      await Material.findByIdAndDelete(id).then((updatedMaterial) => {
        if (!updatedMaterial) {
          res.status(400).json({ message: "Material not found" });
        } else {
          res.json({ message: updatedMaterial });
        }
      });
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
      await Material.findByIdAndUpdate(
        _id,
        { name, pricePerGram },
        { new: true }
      ).then((updatedMaterial) => {
        if (!updatedMaterial) {
          res.status(400).json({ message: "Material not found" });
        } else {
          res.json({ message: updatedMaterial });
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error editing material" });
    }
  }
}

export default new MaterialsController();
