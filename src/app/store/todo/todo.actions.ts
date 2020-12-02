import {Action} from '@ngrx/store';

import {Todo} from '../../modules/todo/domain/todo.model';

export const GET_LIST_REQUEST = '[Todo] GetListRequest';
export const GET_LIST_RESPONSE = '[Todo] GetListResponse';
export const GET_TODO_REQUEST = '[Todo] GetTodoRequest';
export const GET_TODO_RESPONSE = '[Todo] GetTodoResponse';
export const ADD_TODO_REQUEST = '[Todo] AddTodoRequest';
export const ADD_TODO_RESPONSE = '[Todo] AddTodoResponse';
export const EDIT_TODO_REQUEST = '[Todo] EditTodoRequest';
export const EDIT_TODO_RESPONSE = '[Todo] EditTodoResponse';
export const DELETE_TODO_REQUEST = '[Todo] DeleteTodoRequest';
export const DELETE_TODO_RESPONSE = '[Todo] DeleteTodoResponse';
export const CLEAR_CURRENT_TODO = '[Todo] ClearCurrentTodo';
export const REQUEST_FAILURE = '[Todo] RequestFailure';

export class GetListRequest implements Action {
  readonly type = GET_LIST_REQUEST;
}

export class GetListResponse implements Action {
  readonly type = GET_LIST_RESPONSE;

  constructor(public todos: Todo[]) {
  }
}

export class GetTodoRequest implements Action {
  readonly type = GET_TODO_REQUEST;

  constructor(public todoId: number) {
  }
}

export class GetTodoResponse implements Action {
  readonly type = GET_TODO_RESPONSE;

  constructor(public todo: Todo) {
  }
}

export class AddTodoRequest implements Action {
  readonly type = ADD_TODO_REQUEST;

  constructor(public todo: Todo) {
  }
}

export class AddTodoResponse implements Action {
  readonly type = ADD_TODO_RESPONSE;

  constructor(public todo: Todo) {
  }
}

export class EditTodoRequest implements Action {
  readonly type = EDIT_TODO_REQUEST;

  constructor(public todo: Todo) {
  }
}

export class EditTodoResponse implements Action {
  readonly type = EDIT_TODO_RESPONSE;

  constructor(public todo: Todo) {
  }
}

export class DeleteTodoRequest implements Action {
  readonly type = DELETE_TODO_REQUEST;

  constructor(public todoId: number) {
  }
}

export class DeleteTodoResponse implements Action {
  readonly type = DELETE_TODO_RESPONSE;

  constructor(public todoId: number) {
  }
}

export class ClearCurrentTodo implements Action {
  readonly type = CLEAR_CURRENT_TODO;
}

export class RequestFailure implements Action {
  readonly type = REQUEST_FAILURE;
}

export type TodoActions = GetListRequest
  | GetListResponse
  | GetTodoRequest
  | GetTodoResponse
  | AddTodoRequest
  | AddTodoResponse
  | EditTodoRequest
  | EditTodoResponse
  | DeleteTodoRequest
  | DeleteTodoResponse
  | ClearCurrentTodo
  | RequestFailure;
