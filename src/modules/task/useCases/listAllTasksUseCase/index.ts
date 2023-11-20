import { TasksRepository } from "../../repositories/TasksRepository";
import { ListAllTasksController } from "./ListAllTasksController";
import { ListAllTasksUseCase } from "./ListAllTasksUseCase";

const tasksRepository = TasksRepository.getInstance();
const listAllTasksUseCase = new ListAllTasksUseCase(tasksRepository);
export const listAllTasksController = new ListAllTasksController(listAllTasksUseCase);