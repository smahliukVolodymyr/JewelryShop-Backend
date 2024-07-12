import Sales from "../models/Sales.js";

export default async function (req, res, next) {
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
