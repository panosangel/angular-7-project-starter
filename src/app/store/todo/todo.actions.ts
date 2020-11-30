import {Action} from '@ngrx/store';

import {Todo} from '../../modules/todo/domain/todo.model';

export const GET_LIST_REQUEST = '[Todo] GetListRequest';
export const GET_LIST_RESPONSE = '[Todo] GetListResponse';
export const REQUEST_FAILURE = '[Todo] RequestFailure';

export class GetListRequest implements Action {
  readonly type = GET_LIST_REQUEST;
}

export class GetListResponse implements Action {
  readonly type = GET_LIST_RESPONSE;

  constructor(public todos: Todo[]) {
  }
}

export class RequestFailure implements Action {
  readonly type = REQUEST_FAILURE;
}

export type TodoActions = GetListRequest
  | GetListResponse
  | RequestFailure;
