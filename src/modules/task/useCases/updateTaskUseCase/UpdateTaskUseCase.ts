import { TasksRepository } from "../../repositories/TasksRepository";

interface IRequest {
    id: string;
    title: string;
    description: string;
}

export class UpdateTaskUseCase {
    constructor(private tasksRepository: TasksRepository) {}

    execute(data: IRequest): void {
        this.tasksRepository.update(data);
    }
}