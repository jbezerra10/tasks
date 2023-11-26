import { Router } from "express";
import multer from "multer";

import { createTaskController } from "../modules/task/useCases/createTaskUseCase";
import { listAllTasksController } from "../modules/task/useCases/listAllTasksUseCase";
import { updateTaskController } from "../modules/task/useCases/updateTaskUseCase";
import { deleteTaskController } from "../modules/task/useCases/deleteTaskUseCase";
import { completeTaskController } from "../modules/task/useCases/completeTaskUseCase";
import { importTasksController } from "../modules/task/useCases/importTasksUseCase";

export const tasksRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

tasksRoutes.post("/", (req, res) => {
    return createTaskController.handle(req, res);
})

tasksRoutes.get("/", (req, res) => {
    return listAllTasksController.handle(req, res);
})

tasksRoutes.put("/:id", (req, res) => {
    return updateTaskController.handle(req, res);
})

tasksRoutes.delete("/:id", (req, res) => {
    return deleteTaskController.handle(req, res);
})

tasksRoutes.patch("/:id/complete", (req, res) => {
    return completeTaskController.handle(req, res);
})

tasksRoutes.post("/import", upload.single("file"), (req, res) => {
    return importTasksController.handle(req, res);
});