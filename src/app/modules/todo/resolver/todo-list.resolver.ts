import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Actions, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable, race} from 'rxjs';
import {first} from 'rxjs/operators';

import * as todoActions from '../../../store/todo/todo.actions';
import {AppState} from '../../../store/state.model';

@Injectable()
export class TodoListResolver implements Resolve<any> {

  constructor(
    private store: Store<AppState>,
    private action$: Actions,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.store.dispatch(new todoActions.GetListRequest());

    this.waitForResolve();
  }

  waitForResolve(): Observable<Action> {
    const responseOk = this.action$.pipe(ofType(todoActions.GET_LIST_RESPONSE));
    const responseFail = this.action$.pipe(ofType(todoActions.REQUEST_FAILURE));

    return race(responseOk, responseFail).pipe(first());
  }
}
