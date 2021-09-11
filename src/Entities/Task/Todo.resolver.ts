import { ParseIntPipe } from '@nestjs/common';
import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VoidScalar as Void } from '../../GraphQL/Void.scalar';
import { Todo } from './Todo.entity';
import { CreateTodoInput, UpdateTodoInput } from './Todo.inputs';
import { TodoService } from './Todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
  async createNewTodo(@Args('createTodoInput') taskData: CreateTodoInput) {
    const task = this.todoService.createNewTask({ ...taskData });
    await this.todoService.saveTodo(task);

    return task;
  }

  @Mutation(() => Void, { nullable: true, name: 'deleteTodo' })
  async handleTodoDelete(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    await this.todoService.deleteTodo(id);
  }

  @Mutation(() => Todo, { name: 'updateTodo' })
  async handleTodoUpdate(@Args('updateTodoInput') { newContent, id }: UpdateTodoInput) {
    return await this.todoService.updateTodo(id, newContent);
  }

  @Mutation(() => Todo, { name: 'completeTodo', nullable: true })
  async handleTodoComplete(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.todoService.completeTodo(id);
  }

  @Query(() => [Todo])
  async getAllTodos() {
    return this.todoService.getAllTodos();
  }
}
