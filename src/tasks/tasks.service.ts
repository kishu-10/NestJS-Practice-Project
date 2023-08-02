import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './tasks.interface';
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

  getAllTask() {
    return this.tasksRepository.find();
  }

  // findTaskById(id: number) {
  //   return this.tasksRepository.findBy(id);
  // }
}
