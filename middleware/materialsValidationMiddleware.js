import { check } from "express-validator";

const validatiopnMiddleware = [
  check("name", "Material name cannot be empty").notEmpty(),
  check("pricePerGram")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
];

export default validatiopnMiddleware;
