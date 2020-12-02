import {catchError, switchMap, tap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AuthService} from '../../modules/auth/service/auth.service';
import * as authActions from './auth.actions';
import {AppState} from '../state.model';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  @Effect()
  authRequest = this.actions$.pipe(
    ofType(authActions.LOGIN_REQUEST),
    switchMap((action: authActions.LoginRequest) => {
      return this.authService.login(action.request)
        .pipe(
          switchMap(res => {
            if (!res) {
              throw new Error('Busted!!');
            }
            return of(
              new authActions.LoginSuccess()
            );
          }),
          catchError((reject) => ([
            new authActions.LoginFailure()
          ]))
        );
    }),
    catchError((reject) => ([
      new authActions.RequestFailure()
    ]))
  );

  @Effect({dispatch: false})
  authSuccess = this.actions$.pipe(
    ofType(authActions.LOGIN_SUCCESS),
    tap(() => {
      this.router.navigate(['/']);
    })
  );
}
