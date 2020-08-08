import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTasksDto } from './dto/get-tasks-filter.dto';

// Business logic
@Injectable()
export class TasksService {
  //private tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTaskByFilter(filterTaskDto: FilterTasksDto): Task[] {
  //   const { status, search } = filterTaskDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }
  //   if (search) {
  //     const filteredTasks = [];
  //     tasks = tasks.filter(task => {
  //       task.title.includes(search) || task.description.includes(search)
  //         ? filteredTasks.push(task)
  //         : [];
  //       return filteredTasks;
  //     });
  //     tasks = filteredTasks;
  //   }
  //   return tasks;
  // }
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find(task => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException();
  //   }
  //   return found;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateTaskStatus(id: string, taskStaus: TaskStatus): Task {
  //   const singleTask = this.getTaskById(id);
  //   singleTask.status = taskStaus;
  //   return singleTask;
  // }
  // deleteTask(id: string): string {
  //   const fouded = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(e => e.id !== fouded.id);
  //   return this.tasks.filter(e => e.id !== id)
  //     ? 'task deleted'
  //     : 'wrong task id';
  //   //return 'deleted task';
  // }
}
