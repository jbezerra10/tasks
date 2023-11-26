import { TasksRepository } from "../../repositories/TasksRepository";
import { DeleteTaskController } from "./DeleteTaskController";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

const tasksRepository = TasksRepository.getInstance();
const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);
export const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);