import { TasksRepository } from "../../repositories/TasksRepository";

interface IRequest {
    id: string;
    title: string;
    description: string;
}

export class UpdateTaskUseCase {
    constructor(private tasksRepository: TasksRepository) {}

    execute(data: IRequest): void {
        const existTask = this.tasksRepository.findById(data.id);
        if(!existTask) {
            throw new Error("Task not found");
        }

        if(!(data.title || data.description)) {
            throw new Error("Title or Description, void");
        }

        this.tasksRepository.update(data);
    }
}