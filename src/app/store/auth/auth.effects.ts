import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AuthService} from '../../modules/auth/service/auth.service';
import * as authActions from './auth.actions';
import {AppState} from '../state.model';

@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }

  @Effect()
  authRequest = this.actions$.pipe(
    ofType(authActions.LOGIN_REQUEST),
    switchMap((action: authActions.LoginRequest) => {
      return this.authService.login(action.request)
        .pipe(
          switchMap(res => ([
            new authActions.LoginResponse(res)
          ]))
        );
    }),
    catchError((reject) => ([
      new authActions.RequestFailure()
    ]))
  );
}
