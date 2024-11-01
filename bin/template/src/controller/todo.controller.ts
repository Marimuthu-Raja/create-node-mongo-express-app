import { Request, Response } from 'express';
import { todoService } from '../services/todo.service';
import { ApiResponse } from '../utils/ApiResponse';

class TodoController {
  async getAllTodos(req: Request, res: Response) {
    const todos = await todoService.getAllTodos();
    res
      .status(200)
      .json(new ApiResponse(200, todos, 'Todos Fetched Successfully'));
  }

  async getTodoById(req: Request, res: Response) {
    const { id } = req.params;
    const todo = await todoService.getTodoById(id);
    res
      .status(200)
      .json(new ApiResponse(200, todo, 'Todo Fetched Successfully'));
  }

  async createTodo(req: Request, res: Response) {
    const todo = await todoService.createTodo(req.body);
    res
      .status(201)
      .json(new ApiResponse(201, todo, 'Todo Created Successfully'));
  }

  async updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const todo = await todoService.updateTodo(id, req.body);
    res
      .status(200)
      .json(new ApiResponse(200, todo, 'Todo Updated Successfully'));
  }

  async deleteTodo(req: Request, res: Response) {
    const { id } = req.params;
    const todo = await todoService.deleteTodo(id);
    res
      .status(200)
      .json(new ApiResponse(200, todo, 'Todo Deleted Successfully'));
  }
}

const todoController = new TodoController();
export { todoController };
