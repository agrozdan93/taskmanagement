import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTasksDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { DeleteResult } from 'typeorm';
import e from 'express';

// Business logic
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterTasksDto: FilterTasksDto): Promise<Task[]> {
    console.log(filterTasksDto);
    return this.taskRepository.getTasks(filterTasksDto);
  }

  async getTaskById(id: number): Promise<Task> {
    const found = this.taskRepository.getTaskById(id);
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async updateTaskStatus(id: number, taskStaus: TaskStatus): Promise<Task> {
    const singleTask = await this.getTaskById(id);
    singleTask.status = taskStaus;
    await singleTask.save();
    return singleTask;
  }

  async deleteTask(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Taks with ID ${id} is not found`);
    }
  }
}
