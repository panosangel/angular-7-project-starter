import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../store/state.model';
import {Todo} from '../domain/todo.model';
import {selectTodoList} from '../../../store/todo/todo.selector';
import {delay, map} from 'rxjs/operators';

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

  deleteTodoById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
