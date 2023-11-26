import { ITasksRepository } from "../../repositories/ITasksRepository";

export class CompleteTaskUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    execute(id: string) {
        const existTask = this.tasksRepository.findById(id);

        if(!existTask) {
            throw new Error("Task not found");
        }
        
        this.tasksRepository.completedTask(id);
    }
}