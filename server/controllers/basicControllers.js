// Object to contain all our controllers
const basicController = {};

// Basic controller
basicController.get = (req, res) => {
  res.json({
    message: "The backend task"
  });
};

export default basicController;
