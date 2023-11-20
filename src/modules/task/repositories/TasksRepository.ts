import { Task } from "../models/Task";
import { ITasksRepository } from "./ITasksRepository";

interface IRequest {
    title: string;
    description: string;
}

export class TasksRepository implements ITasksRepository {
    public static INSTANCE: TasksRepository;
    private tasks: Task[];

    private constructor() {
        this.tasks = [];
    }

    public static getInstance(): TasksRepository {
        if(!this.INSTANCE) {
            this.INSTANCE = new TasksRepository();
        }

        return this.INSTANCE;
    }

    create({ title, description }: IRequest): void {
        const task = new Task();
        Object.assign(task, {
            title, 
            description,
            completed_at: null,
            created_at: new Date(),
            updated_at: null
        });

        this.tasks.push(task);
    }

    list(): Task[] {
        return this.tasks;
    }
}