import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('todos')
export class Todo extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('increment', { name: 'task_id', type: 'bigint' })
  id: number;

  @Field(() => String)
  @Column({ name: 'task_content', type: 'text' })
  content: string;

  @Field(() => Boolean)
  @Column({ name: 'is_completed', type: 'boolean' })
  is_completed: boolean;
}
