import { Request, Response } from "express";

import { ListAllTasksUseCase } from "./ListAllTasksUseCase";

export class ListAllTasksController {
    constructor(private listAllTasksUseCase: ListAllTasksUseCase) {}

    handle(req: Request, res: Response): Response {
        const allTasks = this.listAllTasksUseCase.execute();

        return res
            .status(200)
            .json(allTasks);
    }
}