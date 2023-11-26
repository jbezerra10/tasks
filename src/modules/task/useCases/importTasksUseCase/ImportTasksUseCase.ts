import fs from "fs";
import {parse as csvParse} from "csv-parse";
import { TasksRepository } from "../../repositories/TasksRepository";

interface IImportTask {
    title: string;
    description: string;
}

export class ImportTasksUseCase {
    constructor(private tasksRepository: TasksRepository) {}

    private loadTasks(file: Express.Multer.File): Promise<IImportTask[]> {
        return new Promise((resolve, reject) => {
            const tasks: IImportTask[] = [];

            const stream = fs.createReadStream(file.path);

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [title, description] = line;

                tasks.push({
                    title, 
                    description
                });
            })
            .on("end", () => {
                resolve(tasks);
            })
            .on("error", (err) => {
                reject(err);
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const tasks = await this.loadTasks(file);

        tasks.map(async (task) => {
            const {title, description} = task;

            const existTask = this.tasksRepository.findByTitle(title) || this.tasksRepository.findByDescription(description);

            if(!existTask) {
                this.tasksRepository.create({title, description});
            }
        });
    }
}