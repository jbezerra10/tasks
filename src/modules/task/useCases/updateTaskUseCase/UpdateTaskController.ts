import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

export class UpdateTaskController {
    constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

    handle(req: Request, res: Response) {
        const {id} = req.params;
        const {title, description} = req.body;

        this.updateTaskUseCase.execute({id, title, description});

        return res
            .status(201)
            .send();
    }
}