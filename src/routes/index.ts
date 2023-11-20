import { Router } from "express";
import { tasksRoutes } from "./tasks.routes";

export const routes = Router();

routes.use("/tasks", tasksRoutes);