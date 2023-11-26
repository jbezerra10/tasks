import { Request, Response } from "express";

import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

    handle(req: Request, res: Response): Response {
        try {
            const {id} = req.params;
    
            this.deleteTaskUseCase.execute(id);
    
            return res
                .status(202)
                .send();
        } catch(err) {
            return res
                .status(404)
                .json({error: err.message});
        }
    }
}