import { Router } from "express";
import { createTaskController } from "../modules/task/useCases/createTaskUseCase";
import { listAllTasksController } from "../modules/task/useCases/listAllTasksUseCase";
import { updateTaskController } from "../modules/task/useCases/updateTaskUseCase";

export const tasksRoutes = Router();

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
    return res
        .status(200)
        .send({sucess: "sucess"});
})

tasksRoutes.patch("/:id/complete", (req, res) => {
    return res
        .status(200)
        .send({sucess: "sucess"});
})