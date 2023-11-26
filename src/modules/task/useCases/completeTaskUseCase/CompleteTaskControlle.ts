import { Request, Response } from "express";

import { CompleteTaskUseCase } from "./CompleteTaskUseCase";

export class CompleteTaskController {
    constructor(private completeTaskUseCase: CompleteTaskUseCase) {}

    handle(req: Request, res: Response) : Response {
        try {
            const {id} = req.params;
        
            this.completeTaskUseCase.execute(id);

            return res
                .status(200)
                .send();
        } catch(err) {
            return res
                .status(404)
                .json({error: err.message});
        }
    }
}