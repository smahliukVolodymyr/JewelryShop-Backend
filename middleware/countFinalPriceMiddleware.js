import Product from "../models/Product.js";
import Sales from "../models/Sales.js";

async function countFinalPrice(req, res, next) {
  try {
    const { product, buyerLastName, buyerFirstName, buyerMiddleName } =
      req.body;
    const productData = await Product.findById(product);
    let price = productData.price;
    const countSales = await Sales.find({
      buyerFirstName,
      buyerLastName,
      buyerMiddleName,
    });
    if (countSales.length >= 2) {
      req.body.finalPrice = price * 0.9;
    } else {
      req.body.finalPrice = price;
    }

    next();
  } catch (e) {
    return res.status(500).json({
      message: "Failed to count final price.",
      error: error.message,
    });
  }
}
export default countFinalPrice;
