import User from "../models/User.js";
import Role from "../models/Role.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import pkg from "jsonwebtoken";
import dotenv from "dotenv";
const { sign } = pkg;

dotenv.config();

const secretKey = process.env.SECRET_KEY_RANDOM;

const genereteAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return sign(payload, secretKey, { expiresIn: "24h" });
};

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(500).json({ message: "Registration error", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with username: ${username} already exists` });
      }
      const hashPassword = bcrypt.hashSync(password, 10);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({ message: "New user was created!" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Registration Error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return status(400).json({ message: `User ${username} not found` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return status(400).json({ message: `Incorrect password` });
      }
      const token = genereteAccessToken(user._id, user.roles);
      return res.json({ token });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Login Error" });
    }
  }

  async getUsers(_, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Error getting users" });
    }
  }
}

export default new authController();
