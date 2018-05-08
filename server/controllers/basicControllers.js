import jwt from "jsonwebtoken";

// Object to contain all our controllers
const basicController = {};

// Login controller
basicController.login = (req, res) => {
  // Mock user
  const user = {};

  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({
      status: "ok",
      message: "Successfully logged in",
      token
    });
  });
};

// Profile Controller
basicController.profile = (req, res) => {
  res.json({
    status: "ok",
    message: "Welcome to your profile"
  });
};

export default basicController;
