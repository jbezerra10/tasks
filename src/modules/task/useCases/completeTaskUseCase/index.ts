import { TasksRepository } from "../../repositories/TasksRepository";
import { CompleteTaskController } from "./CompleteTaskControlle";
import { CompleteTaskUseCase } from "./CompleteTaskUseCase";

const tasksRepository = TasksRepository.getInstance();
const completeTaskUseCase = new CompleteTaskUseCase(tasksRepository);
export const completeTaskController = new CompleteTaskController(completeTaskUseCase);