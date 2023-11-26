import { ITasksRepository } from "../../repositories/ITasksRepository";

interface IRequest {
    title: string;
    description: string;
}

export class CreateTaskCaseUse {
    constructor(private taskRepository: ITasksRepository) {}

    execute({title, description}: IRequest): void {
        const existTask = this.taskRepository.findByTitle(title) || this.taskRepository.findByDescription(description);

        if(existTask) {
            throw new Error("Task already exist");
        }
        
        this.taskRepository.create({title, description});
    }
}