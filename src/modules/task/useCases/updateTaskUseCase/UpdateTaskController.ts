import { Request, Response } from "express";

import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

interface IRequest {
    title?: string;
    description?: string;
}

export class UpdateTaskController {
    constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

    handle(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const infoTask = req.body;

            console.log(infoTask)
            
            this.updateTaskUseCase.execute({id, ...infoTask});

            return res
                .status(201)
                .send();
        } catch(err) {
            return res
                .status(404)
                    .json({error: err.message});
        }
    }
}