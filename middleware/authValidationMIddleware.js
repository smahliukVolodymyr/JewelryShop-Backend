import { check } from "express-validator";

const validatiopnMiddleware = [
  check("username", "Username cannot be empty").notEmpty(),
  check(
    "password",
    "Password must be longer then 4 symbols and shorter then 10 symbols"
  ).isLength(4, 10),
];

export default validatiopnMiddleware;
