import { check } from "express-validator";

const validTypes = [
  "Earrings",
  "Bracelets",
  "Rings",
  "Chains",
  "Necklaces",
  "Brooches",
  "Pendants",
];

export const authValidation = [
  check("username", "Username cannot be empty").notEmpty(),
  check(
    "password",
    "Password must be longer then 4 symbols and shorter then 10 symbols"
  ).isLength(4, 10),
];

export const materialsValidation = [
  check("name", "Material name cannot be empty").notEmpty(),
  check("pricePerGram")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
];

export const productValidation = [
  check("name", "Product name cannot be empty").notEmpty(),
  check("type")
    .isIn(validTypes)
    .withMessage(`Type must be one of: ${validTypes.join(", ")}`),
  check("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
  check("weight")
    .isFloat({ gt: 1 })
    .withMessage("Weight must be a more than 1g."),
  check("materials", "Materials array cannot be empty").isArray({ min: 1 }),
];

export const salesValidation = [
  check(
    "buyerLastName",
    "buyerLastName must be longer then 3 symbols and shorter then 15 symbols"
  ).isLength(3, 15),
  check(
    "buyerFirstName",
    "buyerFirstName must be longer then 3 symbols and shorter then 15 symbols"
  ).isLength(3, 15),
  check(
    "buyerMiddleName",
    "buyerMiddleName must be longer then 3 symbols and shorter then 15 symbols"
  ).isLength(3, 15),
];
