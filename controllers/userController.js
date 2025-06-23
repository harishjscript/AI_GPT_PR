// controllers/userController.js
const userService = require("../services/userService");

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    user ? res.json(user) : res.status(404).json({ error: "User not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const result = await userService.deleteUser(req.params.id);
  result
    ? res.json({ message: "User deleted" })
    : res.status(404).json({ error: "User not found" });
};
