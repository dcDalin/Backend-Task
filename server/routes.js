import express from "express";

// Controller Imports
import basicController from "./controllers/basicControllers";

// Instantiate Express
const routes = express();

// Routes
routes.get("/", basicController.get);

// Export routes - use it in app
export default routes;
