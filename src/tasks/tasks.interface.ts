import { IsNotEmpty, MinLength } from 'class-validator';

export enum taskType {
  URGENT = 'urgent',
  NORMAL = 'normal',
}

export interface TaskDto {
  title: string;
  description: string;
  taskType: taskType;
  date: string;
}

export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @MinLength(3)
  description: string;

  @IsNotEmpty()
  taskType: taskType;

  @IsNotEmpty()
  date: string;
}

export class UpdateTaskDto {
  id: number;
  title: string;
  description: string;
  taskType: taskType;
  date: string;
}
