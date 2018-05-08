import express from "express";

// Get our routes
import routes from "./routes";

// Instantiate
const app = express();

// Api blueprint - /api main route
app.use("/api", routes);

export default app;
