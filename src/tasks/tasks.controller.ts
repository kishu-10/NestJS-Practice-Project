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

@Controller('tasks')
export class TasksController {
  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  async create(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return 'New task has been added.';
  }

  @Get()
  findAll(): string {
    return 'This is the list of tasks.';
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
