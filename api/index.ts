import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let routesRegistered = false;

app.use(async (req, res, next) => {
  if (!routesRegistered) {
    await registerRoutes({} as any, app); 
    routesRegistered = true;
  }
  next();
});

export default app;