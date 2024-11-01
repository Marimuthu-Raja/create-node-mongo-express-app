import { Router } from 'express';
import Promisify from '../utils/Promisify';
import { todoController } from '../controller/todo.controller';

const todoRouter = Router();

todoRouter.get('/', Promisify(todoController.getAllTodos));
todoRouter.get('/:id', Promisify(todoController.getTodoById));
todoRouter.post('/', Promisify(todoController.createTodo));
todoRouter.put('/:id', Promisify(todoController.updateTodo));
todoRouter.delete('/:id', Promisify(todoController.deleteTodo));

export { todoRouter };
