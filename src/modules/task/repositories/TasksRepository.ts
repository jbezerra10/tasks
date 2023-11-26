import { Task } from "../models/Task";
import { ITasksRepository } from "./ITasksRepository";

interface IRequest {
    id?: string;
    title: string;
    description: string;
    updated_at?: Date;
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

    update(data: IRequest): void {
        const task = this.findById(data.id);

        Object.assign(task, {
            ...data,
            updated_at: new Date()
        });
    }

    delete(id: string): void {
        const taskIndice = this.tasks.findIndex(task => task.id === id);
        const task = this.findById(id);

        this.tasks.splice(taskIndice, 1);

    }

    completedTask(id: string): void {
        const task = this.findById(id);

        task.completed_at = new Date();
    }

    findById(id: string): Task {
        const task = this.tasks.find(task => task.id === id);

        return task;
    }

    findByTitle(title: string): Task {
        const task = this.tasks.find(task => task.title === title);

        return task;
    }

    findByDescription(description: string): Task {
        const task = this.tasks.find(task => task.description === description);

        return task;
    }
}