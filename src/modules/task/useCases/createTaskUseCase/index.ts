import { TasksRepository } from "../../repositories/TasksRepository";
import { CreateTaskCaseUse } from "./CreateTaskCaseUse";
import { CreateTaskController } from "./CreateTaskController";

const tasksRepository = TasksRepository.getInstance();
const createTaskUseCase = new CreateTaskCaseUse(tasksRepository);
export const createTaskController = new CreateTaskController(createTaskUseCase);