import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Todo } from './Todo.entity';
import { ICreateTodo } from './Todo.types';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    private readonly connection: Connection,
  ) {}

  createNewTask(data: ICreateTodo): Todo {
    return this.todoRepository.create({
      ...data,
    });
  }

  async saveTodo(todo: Todo): Promise<void> {
    await this.connection.transaction(async (manager) => {
      await manager.save(todo);
    });
  }

  async deleteTodo(id: number): Promise<null> {
    await this.todoRepository.delete(id);

    return null;
  }

  async updateTodo(todoID: number, newContent: string): Promise<Todo> {
    return await this.todoRepository.save({
      id: todoID,
      content: newContent,
      is_completed: false,
    });
  }

  async completeTodo(todoID: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne(todoID);

    return await this.todoRepository.save({
      ...todo,
      is_completed: !todo.is_completed,
    });
  }

  async getAllTodos() {
    return await this.todoRepository.find();
  }
}
