import express from "express";

// Controller Imports
import basicController from "./controllers/basicControllers";

// Instantiate Express
const routes = express();

// Routes
// Index route
routes.post("/", basicController.login);
// Profile route
routes.post("/profile", basicController.profile);

// Export routes - use it in app
export default routes;
