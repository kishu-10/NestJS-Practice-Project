export enum taskType {
  URGENT = 'urgent',
  NORMAL = 'normal',
}

export interface Task {
  title: string;
  description: string;
  taskType: taskType;
  date: string;
}

export class CreateTaskDto {
  title: string;
  description: string;
  taskType: taskType;
  date: string;
}

export class UpdateTaskDto {
  id: number;
  title: string;
  description: string;
  taskType: taskType;
  date: string;
}
