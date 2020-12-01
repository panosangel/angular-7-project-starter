import {Action} from '@ngrx/store';

import {Todo} from '../../modules/todo/domain/todo.model';

export const GET_LIST_REQUEST = '[Todo] GetListRequest';
export const GET_LIST_RESPONSE = '[Todo] GetListResponse';
export const DELETE_TODO_REQUEST = '[Todo] DeleteTodoRequest';
export const DELETE_TODO_RESPONSE = '[Todo] DeleteTodoResponse';
export const REQUEST_FAILURE = '[Todo] RequestFailure';

export class GetListRequest implements Action {
  readonly type = GET_LIST_REQUEST;
}

export class GetListResponse implements Action {
  readonly type = GET_LIST_RESPONSE;

  constructor(public todos: Todo[]) {
  }
}

export class DeleteTodoRequest implements Action {
  readonly type = DELETE_TODO_REQUEST;

  constructor(public todoId: number) {
  }
}

export class DeleteTodoResponse implements Action {
  readonly type = DELETE_TODO_RESPONSE;
}

export class RequestFailure implements Action {
  readonly type = REQUEST_FAILURE;
}

export type TodoActions = GetListRequest
  | GetListResponse
  | DeleteTodoRequest
  | DeleteTodoResponse
  | RequestFailure;
