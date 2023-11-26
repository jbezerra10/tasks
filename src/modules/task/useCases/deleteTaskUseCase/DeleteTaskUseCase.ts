import { ITasksRepository } from "../../repositories/ITasksRepository";

export class DeleteTaskUseCase {
    constructor(private tasksRepository:ITasksRepository) {}

    execute(id: string): void {
        const existTask = this.tasksRepository.findById(id);

        if(!existTask) {
            throw new Error("Task not found");
        }
        
        this.tasksRepository.delete(id);
    }
}