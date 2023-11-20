import { ITasksRepository } from "../../repositories/ITasksRepository";

export class ListAllTasksUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    execute() {
        return this.tasksRepository.list();
    }
}