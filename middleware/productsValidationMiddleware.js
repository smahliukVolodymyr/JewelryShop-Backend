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
const validationMiddleware = [
  check("name", "Material name cannot be empty").notEmpty(),
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

export default validationMiddleware;
