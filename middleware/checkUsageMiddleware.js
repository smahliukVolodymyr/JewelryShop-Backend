import Product from "../models/Product.js";
import Sales from "../models/Sales.js";

export async function checkMaterialUsage(req, res, next) {
  try {
    const id = req.params.id;

    const productsUsingMaterial = await Product.find({ materials: id });

    if (productsUsingMaterial.length > 0) {
      return res
        .status(400)
        .json({ message: "Cannot delete material. It is used in products." });
    }
    next();
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Failed to check material usage.",
      error: error.message,
    });
  }
}

export async function checkProductUsage(req, res, next) {
  try {
    const id = req.params.id;

    const salesUsingPruduct = await Sales.findOne({ product: id });

    if (salesUsingPruduct) {
      return res
        .status(400)
        .json({ message: "Cannot delete product. It is used in sales." });
    }
    next();
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Failed to check product usage.",
      error: error.message,
    });
  }
}
