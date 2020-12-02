import {Action} from '@ngrx/store';

import {LoginAuthRequest} from '../../modules/auth/domain/auth.model';

export const LOGIN_REQUEST = '[Auth] LoginRequest';
export const LOGIN_SUCCESS = '[Auth] LoginSuccess';
export const LOGIN_FAILURE = '[Auth] LoginFailure';
export const REQUEST_FAILURE = '[Auth] RequestFailure';

export class LoginRequest implements Action {
  readonly type = LOGIN_REQUEST;

  constructor(public request: LoginAuthRequest) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
}

export class RequestFailure implements Action {
  readonly type = REQUEST_FAILURE;
}

export type AuthActions = LoginRequest
  | LoginSuccess
  | LoginFailure
  | RequestFailure;
