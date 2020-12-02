import {HttpClient} from '@angular/common/http';
import {delay, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {selectTodoList} from '../../../store/todo/todo.selector';
import {AppState} from '../../../store/state.model';
import {Todo} from '../domain/todo.model';

@Injectable()
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private store: Store<AppState>,
    private httpClient: HttpClient,
  ) {
  }

  getTodos() {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  getTodoById(id: number) {
    // return this.httpClient.get<Todo>(`${this.baseUrl}/${id}`);

    // Please see README
    return this.store.select(selectTodoList).pipe(
      map((todos) => {
        return todos.filter(todo => todo.id === id)[0];
      }),
      delay(10)
    );
  }

  addTodo(todo: Todo) {
    return this.httpClient.post<Todo>(`${this.baseUrl}`, todo);
  }

  editTodo(todo: Todo) {
    // return this.httpClient.put<Todo>(`${this.baseUrl}/${todo.id}`, todo);

    // Please see README
    return Observable.create((observer) => observer.next(todo)).pipe(delay(10));
  }

  deleteTodoById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
