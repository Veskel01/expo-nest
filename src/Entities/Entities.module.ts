import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './Task/Todo.entity';
import { TodoResolver } from './Task/Todo.resolver';
import { TodoService } from './Task/Todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodoService, TodoResolver],
  exports: [TodoService, TodoResolver],
})
export class EntitiesModule {}
