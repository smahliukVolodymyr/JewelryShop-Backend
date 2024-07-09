import pkg from "jsonwebtoken";
import dotenv from "dotenv";
const { verify } = pkg;

dotenv.config();

const secretKey = process.env.SECRET_KEY_RANDOM;

export default function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(403)
          .json({ message: "User authorization is required" });
      }
      const { roles: userRoles } = verify(token, secretKey);
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
        if (!hasRole) {
          res.status(403).json({ message: "Access denied" });
        }
      });
      next();
    } catch (e) {
      console.log(e);
      return res
        .status(403)
        .json({ message: "User authorization is required" });
    }
  };
}
