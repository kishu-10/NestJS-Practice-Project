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
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './tasks.interface';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post('create')
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  @UsePipes(ValidationPipe)
  async create(@Body() createTaskDto: CreateTaskDto) {
    this.taskService.createTask(createTaskDto);
  }

  @Get()
  async getTasks(): Promise<Tasks[]> {
    return this.taskService.getTasks();
  }

  @Get(':id')
  findTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findTaskById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }
}
