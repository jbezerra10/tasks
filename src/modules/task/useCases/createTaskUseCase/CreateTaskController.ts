import { Request, Response } from "express";

import { CreateTaskCaseUse } from "./CreateTaskCaseUse";

export class CreateTaskController {
    constructor(private createTaskUseCase: CreateTaskCaseUse) {}

    handle(req: Request, res: Response): Response {
        try {
            const {title, description} = req.body;

            this.createTaskUseCase.execute({title, description});

            return res
                .status(201)
                .send();
        } catch(err) {
            return res
                .status(400)
                .json({error: err.message});
        }
    }
}