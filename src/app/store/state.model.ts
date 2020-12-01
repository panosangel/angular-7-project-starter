import {Todo} from '../modules/todo/domain/todo.model';

export interface AppState {
  auth: AuthState;
  todo: TodoState;
}

export interface TodoState {
  list: Todo[];
  currentElement: Todo;
}

export interface AuthState {
  isLoggedIn: boolean;
}
