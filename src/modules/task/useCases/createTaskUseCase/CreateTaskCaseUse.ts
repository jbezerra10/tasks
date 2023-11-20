import { ITasksRepository } from "../../repositories/ITasksRepository";

interface IRequest {
    title: string;
    description: string;
}

export class CreateTaskCaseUse {
    constructor(private taskRepository: ITasksRepository) {}

    execute({title, description}: IRequest): void {
        this.taskRepository.create({title, description});
    }
}