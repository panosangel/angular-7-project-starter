import {Todo} from '../modules/todo/domain/todo.model';

export interface AppState {
  todo: TodoState;
}

export interface TodoState {
  list: Todo[];
  currentElement: Todo;
}
