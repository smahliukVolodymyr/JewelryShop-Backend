import { validationResult } from "express-validator";
import Product from "../models/Product.js";

class ProductsController {
  async getAllProducts(_, res) {
    try {
      const allProducts = await Product.find({}).populate({
        path: "materials",
        select: "-_id name",
        strictPopulate: false,
      });
      if (!allProducts.length) {
        return res.status(400).json({ message: "There are no products" });
      }
      res.json(allProducts);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error getting products" });
    }
  }
  async addProduct(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(500)
          .json({ message: "Error adding material: ", errors });
      }
      const { name, type, materials, price, weight } = req.body;
      const product = await Product.findOne({ name, type });
      if (product) {
        return res
          .status(500)
          .json({ message: `Product ${name} with ${type} already exists` });
      }
      const newProduct = new Product({ name, type, materials, weight, price });

      await newProduct.save();
      res.json({ message: "Product was created" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error creating product" });
    }
  }
  async deleteProduct(req, res) {
    try {
      const id = req.params.id;

      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(400).json({ message: "Product not found" });
      }
      res.json(deletedProduct);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error deleting product" });
    }
  }
  async modifyProduct(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(500)
          .json({ message: "Error editing material: ", errors });
      }
      const { _id, name, type, materials, price, weight } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        _id,
        {
          name,
          type,
          materials,
          price,
          weight,
        },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(500).json({ message: "Product not found" });
      }
      res.json(updatedProduct);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Error editing product" });
    }
  }
}

export default new ProductsController();
