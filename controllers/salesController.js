import { validationResult } from "express-validator";
import Sales from "../models/Sales.js";

class SalesControler {
  async getSales(_, res) {
    try {
      const salesData = await Sales.find({}, "-__v").populate({
        path: "product",
        select: "name",
        strictPopulate: false,
      });

      res.json(salesData);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error getting sales data" });
    }
  }
  async addSales(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Error adding sales: ", errors });
      }

      const {
        product,
        finalPrice,
        buyerLastName,
        buyerFirstName,
        buyerMiddleName,
      } = req.body;

      const salesItem = await Sales.findOne({
        product,
      });
      if (salesItem) {
        return res
          .status(400)
          .json({ message: `Sales item with this product already exists` });
      }
      const newSalesItem = new Sales({
        product,
        finalPrice,
        buyerLastName,
        buyerFirstName,
        buyerMiddleName,
      });

      await newSalesItem.save();
      res.json({ message: "Sales item was created" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error creating sale item" });
    }
  }
  async deleteSalesItem(req, res) {
    try {
      const id = req.params.id;

      const deletedSalesItem = await Sales.findByIdAndDelete(id);
      if (!deletedSalesItem) {
        return res.status(400).json({ message: "Sales item not found" });
      }
      res.json(deletedSalesItem);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error deleting sales item" });
    }
  }
  async modifySalesItem(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Error editing sales: ", errors });
      }

      const {
        _id,
        product,
        finalPrice,
        buyerLastName,
        buyerFirstName,
        buyerMiddleName,
        saleDate,
      } = req.body;

      const updatedSalesItem = await Sales.findByIdAndUpdate(
        _id,
        {
          product,
          finalPrice,
          buyerLastName,
          buyerFirstName,
          buyerMiddleName,
          saleDate,
        },
        { new: true }
      );
      if (!updatedSalesItem) {
        return res.status(400).json({ message: "Sales item not found" });
      }
      res.json(updatedSalesItem);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Error editing sales item" });
    }
  }
}

export default new SalesControler();
