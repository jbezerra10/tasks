import { Request, Response } from "express";

import { ImportTasksUseCase } from "./ImportTasksUseCase";

export class ImportTasksController {
    constructor(private importTasksUseCase: ImportTasksUseCase) {}

    handle(req: Request, res: Response): Response {
        const {file} = req;

        this.importTasksUseCase.execute(file);
        
        return res
            .status(201)
            .send();
    }
}