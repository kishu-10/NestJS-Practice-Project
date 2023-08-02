import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'task_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @Column({
    nullable: false,
    default: '',
  })
  type: string;

  @Column({
    nullable: false,
    default: '',
  })
  date: string;
}
