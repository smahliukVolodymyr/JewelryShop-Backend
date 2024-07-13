import { check } from "express-validator";

const validatiopnMiddleware = [
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

export default validatiopnMiddleware;
