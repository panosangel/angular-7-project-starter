import {Action} from '@ngrx/store';

import {LoginAuthRequest} from '../../modules/auth/domain/auth.model';

export const LOGIN_REQUEST = '[Auth] LoginRequest';
export const LOGIN_RESPONSE = '[Auth] LoginResponse';
export const REQUEST_FAILURE = '[Auth] RequestFailure';


export class LoginRequest implements Action {
  readonly type = LOGIN_REQUEST;

  constructor(public request: LoginAuthRequest) {
  }
}

export class LoginResponse implements Action {
  readonly type = LOGIN_RESPONSE;

  constructor(public response: any) {
  }
}

export class RequestFailure implements Action {
  readonly type = REQUEST_FAILURE;
}

export type AuthActions = LoginRequest
  | LoginResponse
  | RequestFailure;
