import { Task } from "../models/Task";

interface ITasksRepositoryDTO {
    title: string;
    description: string;
}

export interface ITasksRepository {
    create({title, description}: ITasksRepositoryDTO): void;
    list(): Task[];
    update(data: Task): void;
    findById(id: string): Task;
}