import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {from} from 'rxjs';

import {TodoService} from '../../modules/todo/service/todo.service';
import {Todo} from '../../modules/todo/domain/todo.model';
import * as todoActions from './todo.actions';
import {AppState} from '../state.model';

@Injectable()
export class TodoEffects {
  constructor(
    private store: Store<AppState>,
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
  getTodo = this.actions$.pipe(
    ofType(todoActions.GET_TODO_REQUEST),
    switchMap((action: todoActions.GetTodoRequest) => {
      return this.todoService.getTodoById(action.todoId)
        .pipe(
          switchMap((todo) => {
            return from([
              new todoActions.GetTodoResponse(todo)
            ]);
          })
        );
    }),
    catchError((reject) => ([
      new todoActions.RequestFailure()
    ]))
  );

  @Effect()
  addTodo = this.actions$.pipe(
    ofType(todoActions.ADD_TODO_REQUEST),
    switchMap((action: todoActions.AddTodoRequest) => {
      return this.todoService.addTodo(action.todo)
        .pipe(
          switchMap(todo => ([
            new todoActions.AddTodoResponse(todo)
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
    }),
    catchError((reject) => ([
      new todoActions.RequestFailure()
    ]))
  );
}
