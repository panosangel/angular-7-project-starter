import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {TodoService} from '../../modules/todo/service/todo.service';
import * as todoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService,
  ) {
  }

  @Effect()
  getTodoList = this.actions$.pipe(
    ofType(todoActions.GET_LIST_REQUEST),
    switchMap((action: todoActions.GetListRequest) => {
      return this.todoService.getTodos()
        .pipe(
          switchMap(todos => ([
            new todoActions.GetListResponse(todos)
          ]))
        );
    })
  );

  @Effect()
  deleteTodo = this.actions$.pipe(
    ofType(todoActions.DELETE_TODO_REQUEST),
    switchMap((action: todoActions.DeleteTodoRequest) => {
      return this.todoService.deleteTodoById(action.todoId)
        .pipe(
          switchMap(res => ([
            new todoActions.DeleteTodoResponse(action.todoId)
          ]))
        );
    })
  );
}
