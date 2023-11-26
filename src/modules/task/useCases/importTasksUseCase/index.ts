import { TasksRepository } from "../../repositories/TasksRepository";
import { ImportTasksController } from "./ImportTasksController";
import { ImportTasksUseCase } from "./ImportTasksUseCase";

const tasksRepository = TasksRepository.getInstance();
const importTasksUseCase = new ImportTasksUseCase(tasksRepository);
export const importTasksController = new ImportTasksController(importTasksUseCase);