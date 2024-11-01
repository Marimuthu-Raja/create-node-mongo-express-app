import mongoose, { Schema } from 'mongoose';
import { Todo } from '../@types/Todo';

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
});

export const TodoModel = mongoose.model<Todo>('Todo', TodoSchema);
