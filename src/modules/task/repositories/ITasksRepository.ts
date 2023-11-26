import { Task } from "../models/Task";

interface ITasksRepositoryDTO {
    title: string;
    description: string;
}

export interface ITasksRepository {
    create({title, description}: ITasksRepositoryDTO): void;
    list(): Task[];
    update(data: Task): void;
    delete(id: string): void;
    completedTask(id: string): void;
    findById(id: string): Task;
    findByTitle(title: string): Task;
    findByDescription(description: string): Task;
}