import { Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'New task has been added.';
  }
  @Get()
  findAll(): string {
    return 'This is the list of tasks.';
  }
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This is the task whose id is ${params.id}`;
  }
}
