import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './tasks.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from './tasks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private readonly tasksRepository: Repository<Tasks>,
  ) {}

  createTask(createTaskDto: CreateTaskDto) {
    const newTask = this.tasksRepository.create(createTaskDto);
    return this.tasksRepository.save(newTask);
  }

  getTasks() {
    return this.tasksRepository.find();
  }

  findTaskById(id: number) {
    return this.tasksRepository.findOneBy({ id: id });
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update(
      { id },
      {
        title: updateTaskDto.title,
        description: updateTaskDto.description,
        type: updateTaskDto.taskType,
        date: updateTaskDto.date,
      },
    );
  }

  deleteTask(id: number) {
    this.tasksRepository.delete(id);
  }
}
