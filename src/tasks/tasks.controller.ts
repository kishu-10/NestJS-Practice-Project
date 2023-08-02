import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './tasks.interface';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  async create(@Body() createTaskDto: CreateTaskDto) {
    this.taskService.createTask(createTaskDto);
  }

  @Get()
  async findAll(): Promise<Tasks[]> {
    return this.taskService.getAllTask();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(id);
    return `This is the task whose id is ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    console.log(updateTaskDto);
    return `Task with id ${id} has been updated`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return `Task with id ${id} has been deleted`;
  }
}
