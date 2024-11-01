import { Todo } from '../@types/Todo';
import { TodoModel } from '../models/todo.model';

class TodoService {
  async getAllTodos() {
    return await TodoModel.find();
  }

  async getTodoById(id: string) {
    return await TodoModel.findById(id);
  }

  async createTodo(todo: Todo) {
    return await TodoModel.create(todo);
  }

  async updateTodo(id: string, todo: Todo) {
    return await TodoModel.findByIdAndUpdate(id, todo);
  }

  async deleteTodo(id: string) {
    return await TodoModel.findByIdAndDelete(id);
  }
}

const todoService = new TodoService();
export { todoService };
