import { TasksRepository } from "../../repositories/TasksRepository";
import { UpdateTaskController } from "./UpdateTaskController";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

const taskRepository = TasksRepository.getInstance();
const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
export const updateTaskController = new UpdateTaskController(updateTaskUseCase);