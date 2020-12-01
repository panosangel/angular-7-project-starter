import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Actions, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {first} from 'rxjs/operators';
import {Observable, race} from 'rxjs';

import * as todoActions from '../../../store/todo/todo.actions';
import {AppState} from '../../../store/state.model';

@Injectable()
export class TodoElementResolver implements Resolve<any> {

  constructor(
    private store: Store<AppState>,
    private action$: Actions,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    const elementId = +route.paramMap.get('id');
    this.store.dispatch(new todoActions.GetTodoRequest(elementId));

    this.waitForResolve();
  }

  waitForResolve(): Observable<Action> {
    const responseOk = this.action$.pipe(ofType(todoActions.GET_TODO_RESPONSE));
    const responseFail = this.action$.pipe(ofType(todoActions.REQUEST_FAILURE));

    return race(responseOk, responseFail).pipe(first());
  }
}
